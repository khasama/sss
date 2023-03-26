const express = require("express");
const router = express.Router();

const { MembershipController } = require("../../controllers/admin.controller");

router.put("/:id", MembershipController.updateMembership);
router.delete("/:id", MembershipController.deleteMembership);
router.post("/", MembershipController.addMembership);
router.get("/:id", MembershipController.getMembership);
router.get("/", MembershipController.membershipPage);

module.exports = router;