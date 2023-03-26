const express = require("express");
const router = express.Router();

const { CategoryController } = require("../../controllers/admin.controller");

router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);
router.post("/", CategoryController.addCategory);
router.get("/:id", CategoryController.getCategory);
router.get("/", CategoryController.categoryPage);

module.exports = router;