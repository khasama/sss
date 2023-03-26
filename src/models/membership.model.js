const pool = require("../configs/mssql.config");
const sql = require("mssql");
const MembershipModel = {}


MembershipModel.getAllMembership = async () => {
    try {
        const result = await pool.query(`select * from LINKSERVER.sss.dbo.tb_memberships`);
        if (result.recordset.length > 0) return result.recordset;
        return false;
    } catch (error) {
        throw error;
    }
}

MembershipModel.getMembership = async (id) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query("select * from LINKSERVER.sss.dbo.tb_memberships where id = @id");
        if (result.recordset.length > 0) return result.recordset[0];
        return false;
    } catch (error) {
        throw error;
    }
}

MembershipModel.updateMembership = async (id, name, phone, level) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.NVarChar, name)
            .input('phone', sql.NVarChar, phone)
            .input('level', sql.NVarChar, level)
            .query(`
                update LINKSERVER.sss.dbo.tb_memberships
                set name = @name,
                    phone = @phone,
                    level = @level
                where id = @id
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}

MembershipModel.addMembership = async (name, phone) => {
    try {
        const result = await pool.request()
            .input('name', sql.NVarChar, name)
            .input('phone', sql.NVarChar, phone)
            .query(`
                insert into LINKSERVER.sss.dbo.tb_memberships (name, phone, level, deleted) VALUES
                (@name, @phone, 0, 0);
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}

MembershipModel.deleteMembership = async (id) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`
                update LINKSERVER.sss.dbo.tb_memberships
                set deleted = 1
                where id = @id;
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}


module.exports = MembershipModel;