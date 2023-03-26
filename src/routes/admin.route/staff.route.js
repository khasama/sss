const express = require("express");
const router = express.Router();

const { StaffController } = require("../../controllers/admin.controller");

router.put("/:id", StaffController.updateStaff);
router.delete("/:id", StaffController.deleteStaff);
router.post("/", StaffController.addStaff);
router.get("/:id", StaffController.getStaff);
router.get("/", StaffController.staffPage);

module.exports = router;