const express = require("express");
const router = express.Router();
const { AdminController } = require("../../controllers/admin.controller");

const { verifyRole } = require("../../middlewares");

const ProductRoute = require("./product.route");
const CategoryRoute = require("./category.route");
const StaffRoute = require("./staff.route");
const MembershipRoute = require("./membership.route");
const OrderRoute = require("./order.route");
const BranchRoute = require("./branch.route");
const StorageRoute = require("./storage.route");

router.use("/product", verifyRole(["admin", "manager"]), ProductRoute);
router.use("/category", verifyRole(["admin", "manager"]), CategoryRoute);
router.use("/staff", verifyRole(["admin", "manager"]), StaffRoute);
router.use(
  "/membership",
  verifyRole(["admin", "manager", "cashier"]),
  MembershipRoute
);
router.use(
  "/order",
  verifyRole(["admin", "manager", , "cashier", "storager"]),
  OrderRoute
);
router.use("/branch", verifyRole(["admin", "manager"]), BranchRoute);
router.use(
  "/storage",
  verifyRole(["admin", "manager", , "cashier", "storager"]),
  StorageRoute
);

router.get("/", AdminController.dashboard);

module.exports = router;
