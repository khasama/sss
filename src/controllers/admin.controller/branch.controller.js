const BranchModel = require("../../models/branch.model");

const BranchController = {};

BranchController.branchPage = async (req, res) => {
    try {
        const branches = await BranchModel.getAllBranch();
        return res.render("pages/branch", { domain: global.domain, branch: global.branch, branches, user: req.session.user });
    } catch (error) {
    }
};

BranchController.getBranch = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const branch = await BranchModel.getBranch(parseInt(id));
            if (branch) return res.status(200).json({ status: 'success', data: branch });
            return res.status(200).json({ status: 'error', message: "Not found" });
        }
        return res.status(400)
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

BranchController.updateBranch = async (req, res) => {
    try {
        const id = req.params.id;
        const { branch, address } = req.body;
        if (id && branch && address) {
            const rs = await BranchModel.updateBranch(parseInt(id), branch, address);
            if (rs) return res.status(200).json({ status: 'success' });
            return res.status(200).json({ status: 'error', message: "Not found" });
        }
        return res.status(400)
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

module.exports = BranchController;