const ProductController = require("./product.controller");
// const ServerController = require("./server.controller");
// const EpisodeController = require("./episode.controller");
// const LinkController = require("./link.controller");
// const UserController = require("./user.controller");
// const ToolController = require("./tool.controller");

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
    // ServerController,
    // EpisodeController,
    // LinkController,
    // UserController,
    // ToolController,
    AdminController,
}