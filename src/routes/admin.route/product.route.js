const express = require("express");
const router = express.Router();

const { ProductController } = require("../../controllers/admin.controller");

router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);
router.get("/:id", ProductController.getProduct);
router.post("/", ProductController.addProduct);
router.get("/", ProductController.productPage);

module.exports = router;