const express = require("express");
const router = express.Router();

const { OrderController } = require("../../controllers/admin.controller");

// router.put("/:id", StaffController.updateStaff);
// router.delete("/:id", StaffController.deleteStaff);
// router.post("/", StaffController.addStaff);
// router.get("/:id", StaffController.getStaff);
router.get("/", OrderController.orderPage);

module.exports = router;