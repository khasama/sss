const BranchModel = require("../../models/branch.model");

const BranchController = {};

BranchController.branchPage = async (req, res) => {
    try {
        const branches = await BranchModel.getAllBranch();
        return res.render("pages/branch", { domain: global.domain, branch: global.branch, branches });
    } catch (error) {
    }
};

module.exports = BranchController;