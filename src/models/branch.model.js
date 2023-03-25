const pool = require("../configs/mssql.config");
const sql = require("mssql");
const BranchModel = {}

BranchModel.currentBranch = async () => {
    const result = await pool.query("select * from tb_branchs");
    return result.recordset[0];
}


module.exports = BranchModel;