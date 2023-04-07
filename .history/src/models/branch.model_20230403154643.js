const pool = require("../configs/mssql.config");
const sql = require("mssql");
const BranchModel = {};

BranchModel.currentBranch = async () => {
  const result = await pool.query("select * from tb_branchs");
  return result.recordset[0];
};

CategoryModel.getBranch = async (id) => {
  try {
    const result = await pool.request().input("id", sql.Int, id).query(`
              select * from LINKSERVER.sss.dbo.tb_branchs
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
};

BranchModel.getAllBranch = async () => {
  const result = await pool.query(
    "select * from LINKSERVER.sss.dbo.tb_branchs"
  );
  return result.recordset;
};

BranchModel.updateBranch = async (id, branch, address) => {
  const result = await pool
    .request()
    .input("id", sql.Int, id)
    .input("branch", sql.NVarChar, branch)
    .input("address", sql.NVarChar, address).query(`
                update LINKSERVER.sss.dbo.tb_branchs
                set branch = @branch,
                    address = @address
                where id = @id
            `);
  if (result.recordset.length > 0) return result.recordset;
  return false;
};

module.exports = BranchModel;
