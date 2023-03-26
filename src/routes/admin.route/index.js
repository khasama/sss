const express = require("express");
const router = express.Router();
const { AdminController } = require("../../controllers/admin.controller");

const ProductRoute = require("./product.route");
const CategoryRoute = require("./category.route");
const StaffRoute = require("./staff.route");
const MembershipRoute = require("./membership.route");

router.use("/product", ProductRoute);
router.use("/category", CategoryRoute);
router.use("/staff", StaffRoute);
router.use("/membership", MembershipRoute);


router.get("/", AdminController.dashboard);

module.exports = router;
