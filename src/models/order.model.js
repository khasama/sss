const pool = require("../configs/mssql.config");
const sql = require("mssql");
const OrderModel = {}

OrderModel.getAllOrder = async () => {
    try {
        const result = await pool.query(`select * from tb_orders`);
        return result.recordset;
    } catch (error) {
        throw error;
    }
}

OrderModel.getOrder = async (id) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query("select * from tb_orders where id = @id");
        if (result.recordset.length > 0) return result.recordset[0];
        return false;
    } catch (error) {
        throw error;
    }
}

OrderModel.getOrderDetail = async (idOrder) => {
    try {
        const result = await pool.request()
            .input('idOrder', sql.Int, idOrder)
            .query(`
            select d.*, p.name from tb_order_details d
            inner join tb_products p
            on d.id_product = p.id
            where d.id_order = @idOrder

            `);
        if (result.recordset.length > 0) return result.recordset;
        return false;
    } catch (error) {
        throw error;
    }
}

module.exports = OrderModel;