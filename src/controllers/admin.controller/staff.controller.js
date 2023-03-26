const bcrypt = require("bcrypt");
const StaffModel = require("../../models/staff.model");

const StaffController = {};

StaffController.staffPage = async (req, res) => {
    try {
        const staffs = await StaffModel.getAllStaff();
        return res.render("pages/staff", { domain: global.domain, branch: global.branch, staffs });
    } catch (error) {
    }
};

StaffController.getStaff = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const staff = await StaffModel.getStaff(parseInt(id));
            if (!staff) return res.status(200).json({ status: 'error', message: "Not found" });
            return res.status(200).json({ status: 'success', data: staff });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

StaffController.updateStaff = async (req, res) => {
    try {
        const { fullName, age, phone, gender, address, email, role } = req.body;
        const id = req.params.id;
        if (id && fullName && age && phone && gender && address && email && role) {
            const rs = await StaffModel.updateStaff(parseInt(id), fullName, age, phone, gender, address, email, role);
            if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

StaffController.deleteStaff = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const rs = await StaffModel.deleteStaff(parseInt(id));
            if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

StaffController.addStaff = async (req, res) => {
    try {
        const { fullName, age, phone, gender, address, email, role, username, password } = req.body;
        if (fullName && age && phone && gender && address && email && role && username && password) {
            const idBranch = global.branch.id;
            const hashPass = await bcrypt.hash(password, 10);
            await StaffModel.addStaff(fullName, age, phone, gender, address, email, idBranch, username, hashPass, role);
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

module.exports = StaffController;