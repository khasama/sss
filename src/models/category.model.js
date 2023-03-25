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


module.exports = CategoryModel;