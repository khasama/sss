const pool = require("../configs/mssql.config");
const sql = require("mssql");
const StaffModel = {}

StaffModel.login = async (username) => {
    try {
        const result = await pool.request()
            .input('username', sql.NVarChar, username)
            .query("select * from tb_staffs where username = @username");
        if (result.recordset.length > 0) return result.recordset[0];
        return false;
    } catch (error) {
        throw error;
    }
}


StaffModel.getAllStaff = async () => {
    try {
        const result = await pool.query(`select * from tb_staffs`);
        if (result.recordset.length > 0) return result.recordset;
        return false;
    } catch (error) {
        throw error;
    }
}

StaffModel.getStaff = async (id) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query("select * from tb_staffs where id = @id");
        if (result.recordset.length > 0) return result.recordset[0];
        return false;
    } catch (error) {
        throw error;
    }
}

StaffModel.updateStaff = async (id, fullName, age, phone, gender, address, email, role) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('fullName', sql.NVarChar, fullName)
            .input('age', sql.Int, age)
            .input('phone', sql.NVarChar, phone)
            .input('gender', sql.NVarChar, gender)
            .input('address', sql.NVarChar, address)
            .input('email', sql.NVarChar, email)
            .input('role', sql.NVarChar, role)
            .query(`
                update tb_staffs
                set full_name = @fullName,
                    age = @age,
                    phone = @phone,
                    gender = @gender,
                    address = @address,
                    email = @email,
                    role = @role
                where id = @id
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}

StaffModel.addStaff = async (fullName, age, phone, gender, address, email, idBranch, username, password, role) => {
    try {
        const result = await pool.request()
            .input('fullName', sql.NVarChar, fullName)
            .input('age', sql.Int, age)
            .input('phone', sql.NVarChar, phone)
            .input('gender', sql.NVarChar, gender)
            .input('address', sql.NVarChar, address)
            .input('email', sql.NVarChar, email)
            .input('idBranch', sql.Int, idBranch)
            .input('username', sql.NVarChar, username)
            .input('password', sql.NVarChar, password)
            .input('role', sql.NVarChar, role)
            .query(`
                insert into LINKSERVER.sss.dbo.tb_staffs (full_name, age, phone, gender, address, email, id_branch, username, password, role) VALUES
                (@fullName, @age, @phone, @gender, @address, @email, @idBranch, @username, @password, @role);
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}

StaffModel.deleteStaff = async (id) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`
                delete from tb_staffs
                where id = @id
            `);
        if (result.rowsAffected[0] > 0) return true;
        return false;
    } catch (error) {
        throw error;
    }
}


module.exports = StaffModel;