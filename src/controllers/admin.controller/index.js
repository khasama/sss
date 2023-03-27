const ProductController = require("./product.controller");
const CategoryController = require("./category.controller");
const StaffController = require("./staff.controller");
const MembershipController = require("./membership.controller");
const StorageController = require("./storage.controller");
const OrderController = require("./order.controller");
const BranchController = require("./branch.controller");

const BranchModel = require("../../models/branch.model");

const AdminController = {};

AdminController.dashboard = async (req, res) => {
    try {
        const currentBranch = await BranchModel.currentBranch();
        global.branch = currentBranch;
        return res.render("", { domain: global.domain, branch: global.branch });
    } catch (error) {
        // logger.error(error.stack || error);
    }
};

module.exports = {
    ProductController,
    CategoryController,
    StaffController,
    MembershipController,
    StorageController,
    OrderController,
    BranchController,
    AdminController,
}