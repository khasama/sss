const express = require("express");
const router = express.Router();
const adminRoute = require("./admin.route");
const authRoute = require("./auth.route");
const AuthController = require("../controllers/auth.controller");

const { verifyLogin } = require("../middlewares");


router.use("/login", authRoute);
router.get("/logout", AuthController.logout);
router.use("/", verifyLogin, adminRoute);

module.exports = router;
