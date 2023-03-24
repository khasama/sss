const bcrypt = require("bcrypt");
const StaffModel = require("../models/staff.model");
const AuthController = {};

AuthController.login = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        if (username && password) {
            // console.log({ username, password });
            const staff = await StaffModel.login(username);
            if (staff) {
                const hashPass = staff.password;
                const match = await bcrypt.compare(password, hashPass);
                if (match) {
                    const payload = {
                        id: staff.id,
                        username: staff.username,
                        role: staff.role,
                    };
                    req.session.user = payload;

                    return res.status(200).json({ status: "success" });
                } else {
                    return res
                        .status(200)
                        .json({ status: "error", message: "Sai pass" });
                }
            } else {
                // logger.warn("not found");
                return res.status(200).json({
                    status: "error",
                    message: "Nhân viên không tồn tại ở chi nhánh này",
                });
            }
        } else {
            return res
                .status(200)
                .json({ status: "error", message: "Thiếu kìa bạn trẻ" });
        }
    } catch (error) {
        return res.status(200).json({ status: "error", message: error });
    }
}

AuthController.loginPage = async (req, res) => {
    return res.render('login', { domain: global.domain });
}


module.exports = AuthController;