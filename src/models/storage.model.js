const pool = require("../configs/mssql.config");
const sql = require("mssql");
const StorageModel = {}

StorageModel.getAllStorage = async () => {
    try {
        const result = await pool.query(`
        select s.*, p.name from tb_storages s
        inner join tb_products p
        on s.id_product = p.id
        `);
        return result.recordset;
    } catch (error) {
        throw error;
    }
}

StorageModel.getStorage = async (id) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`
                select s.*, p.name from tb_storages s 
                inner join tb_products p
                on s.id_product = p.id
                where s.id = @id
            `);
        if (result.recordset.length > 0) return result.recordset[0];
        return false;
    } catch (error) {
        throw error;
    }
}

StorageModel.updateStorage = async (id, quantity) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('quantity', sql.Int, quantity)
            .query(`
                update tb_storages
                set quantity = @quantity
                where id = @id
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}

StorageModel.deleteStorage = async (id) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`
                delete from LINKSERVER.sss.dbo.tb_storages
                where id = @id
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}

StorageModel.addStorage = async (idProduct, quantity, idBranch) => {
    try {
        const result = await pool.request()
            .input('idProduct', sql.Int, idProduct)
            .input('quantity', sql.Int, quantity)
            .input('idBranch', sql.Int, idBranch)
            .query(`
                insert into LINKSERVER.sss.dbo.tb_storages (id_product, quantity, id_branch) values
                (@idProduct, @quantity, @idBranch);
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}

StorageModel.checkHasStorage = async (idProduct, idBranch) => {
    try {
        const result = await pool.request()
            .input('idProduct', sql.Int, idProduct)
            .input('idBranch', sql.Int, idBranch)
            .query(`
                select *from tb_storages 
                where id_product = @idProduct
                and id_branch = @idBranch
            `);
        if (result.recordset.length > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}

module.exports = StorageModel;