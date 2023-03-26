const pool = require("../configs/mssql.config");
const sql = require("mssql");
const CategoryModel = {}

CategoryModel.getAllCategory = async () => {
    try {
        const result = await pool.query(`select * from LINKSERVER.sss.dbo.tb_categories`);
        return result.recordset;
    } catch (error) {
        throw error;
    }
}

CategoryModel.getCategory = async (id) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`
                select * from LINKSERVER.sss.dbo.tb_categories
                where id = @id
            `);
        if (result.recordset.length > 0) {
            return result.recordset[0];
        } else {
            false;
        }
    } catch (error) {
        throw error;
    }
}

CategoryModel.addCategory = async (category) => {
    try {
        const result = await pool.request()
            .input('category', sql.NVarChar, category)
            .query(`
                insert into LINKSERVER.sss.dbo.tb_categories (category) VALUES
                (@category);
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}

CategoryModel.updateCategory = async (id, category) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('category', sql.NVarChar, category)
            .query(`
                update LINKSERVER.sss.dbo.tb_categories
                set category = @category
                where id = @id
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}

CategoryModel.deleteCategory = async (id) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`
                delete from LINKSERVER.sss.dbo.tb_categories
                where id = @id
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}


module.exports = CategoryModel;