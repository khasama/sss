const pool = require("../configs/mssql.config");
const sql = require("mssql");
const ProductModel = {}

ProductModel.getAllProduct = async () => {
    try {
        const result = await pool.query(`
            select p.*, c.category from LINKSERVER.sss.dbo.tb_products p 
            left outer join LINKSERVER.sss.dbo.tb_categories c
            on p.id_category = c.id
        `);
        return result.recordset;
    } catch (error) {
        throw error;
    }
}


module.exports = ProductModel;