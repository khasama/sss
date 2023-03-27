const express = require("express");
const router = express.Router();

const { StorageController } = require("../../controllers/admin.controller");

router.put("/:id", StorageController.updateStorage);
router.delete("/:id", StorageController.deleteStorage);
router.post("/", StorageController.addStorage);
router.get("/:id", StorageController.getStorage);
router.get("/", StorageController.storagePage);

module.exports = router;