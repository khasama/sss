const express = require("express");
const router = express.Router();
// const mangaRoute = require("./manga.route");
// const hlsRoute = require("./hls.route");
// const adminRoute = require("./admin.route");
const authRoute = require("./auth.route");
// const apiRoute = require("./api.route");


// const { verifyAdmin } = require("../middlewares");


router.use("/login", authRoute);
// router.use("/", adminRoute);

module.exports = router;
