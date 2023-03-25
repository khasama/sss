const express = require("express");
const router = express.Router();
const { AdminController } = require("../../controllers/admin.controller");

const ProductRoute = require("./product.route");

router.use("/product", ProductRoute);


router.get("/", AdminController.dashboard);

module.exports = router;
