const pool = require("../configs/mssql.config");
const sql = require("mssql");
const StaffModel = {}

StaffModel.login = async (username) => {
    const result = await pool.request()
        .input('username', sql.NVarChar, username)
        .query("select * from tb_staffs where username = @username");
    if (result.recordset.length > 0) {
        return result.recordset[0];
    } else {
        return false;
    }
}


module.exports = StaffModel;