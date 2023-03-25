const express = require("express");
const router = express.Router();

const { ProductController } = require("../../controllers/admin.controller");

// router.put("/:id", ProductController.updateServer);
// router.delete("/:id", ProductController.deleteServer);
// router.post("/", ProductController.addServer);
router.get("/", ProductController.productPage);

module.exports = router;