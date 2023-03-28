const express = require("express");
const router = express.Router();

const { BranchController } = require("../../controllers/admin.controller");

router.put("/:id", BranchController.updateBranch);
router.get("/:id", BranchController.getBranch);
router.get("/", BranchController.branchPage);

module.exports = router;