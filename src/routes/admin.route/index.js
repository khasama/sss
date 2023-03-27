const express = require("express");
const router = express.Router();
const { AdminController } = require("../../controllers/admin.controller");

const ProductRoute = require("./product.route");
const CategoryRoute = require("./category.route");
const StaffRoute = require("./staff.route");
const MembershipRoute = require("./membership.route");
const OrderRoute = require("./order.route");
const BranchRoute = require("./branch.order");
const StorageRoute = require("./storage.route");

router.use("/product", ProductRoute);
router.use("/category", CategoryRoute);
router.use("/staff", StaffRoute);
router.use("/membership", MembershipRoute);
router.use("/order", OrderRoute);
router.use("/branch", BranchRoute);
router.use("/storage", StorageRoute);


router.get("/", AdminController.dashboard);

module.exports = router;
