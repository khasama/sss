const pool = require("../configs/mssql.config");
const sql = require("mssql");
const BranchModel = {}

BranchModel.currentBranch = async () => {
    const result = await pool.query("select * from tb_branchs");
    return result.recordset[0];
}

BranchModel.getAllBranch = async () => {
    const result = await pool.query("select * from LINKSERVER.sss.dbo.tb_branchs");
    return result.recordset;
}


module.exports = BranchModel;