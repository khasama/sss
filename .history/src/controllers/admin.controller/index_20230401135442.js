const ProductController = require("./product.controller");
const CategoryController = require("./category.controller");
const StaffController = require("./staff.controller");
const MembershipController = require("./membership.controller");
const StorageController = require("./storage.controller");
const OrderController = require("./order.controller");
const BranchController = require("./branch.controller");

const BranchModel = require("../../models/branch.model");
const ProductModel = require("../../models/product.model");
const StorageModel = require("../../models/storage.model");

const AdminController = {};

AdminController.dashboard = async (req, res) => {
  try {
    const currentBranch = await BranchModel.currentBranch();
    const products = await ProductModel.getAllProduct();
    const storages = await StorageModel.getAllStorage();
    global.branch = currentBranch;
    return res.render("", {
      domain: global.domain,
      branch: global.branch,
      products,
      storages,
      user: req.session.user,
    });
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
  products: products,
  storages: storages,
};
