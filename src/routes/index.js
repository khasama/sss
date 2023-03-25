const express = require("express");
const router = express.Router();
const adminRoute = require("./admin.route");
const authRoute = require("./auth.route");


const { verifyAdmin } = require("../middlewares");


router.use("/login", authRoute);
router.use("/", verifyAdmin, adminRoute);

module.exports = router;
