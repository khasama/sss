const bcrypt = require("bcrypt");
const MembershipModel = require("../../models/membership.model");

const MembershipController = {};

MembershipController.membershipPage = async (req, res) => {
    try {
        const memberships = await MembershipModel.getAllMembership();
        return res.render("pages/membership", { domain: global.domain, branch: global.branch, memberships, user: req.session.user });
    } catch (error) {
    }
};

MembershipController.getMembership = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const member = await MembershipModel.getMembership(parseInt(id));
            if (!member) return res.status(200).json({ status: 'error', message: "Not found" });
            return res.status(200).json({ status: 'success', data: member });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

MembershipController.updateMembership = async (req, res) => {
    try {
        const { name, phone, level } = req.body;
        const id = req.params.id;
        if (id && name && phone && level) {
            const rs = await MembershipModel.updateMembership(parseInt(id), name, phone, level);
            if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

MembershipController.deleteMembership = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const rs = await MembershipModel.deleteMembership(parseInt(id));
            if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

MembershipController.addMembership = async (req, res) => {
    try {
        const { name, phone } = req.body;
        if (name && phone) {
            await MembershipModel.addMembership(name, phone);
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

module.exports = MembershipController;