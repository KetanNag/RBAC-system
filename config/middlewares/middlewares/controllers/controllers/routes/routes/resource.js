const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/auth");
const { roleCheck } = require("../middlewares/roleCheck");
const { adminResource, userResource } = require("../controllers/resourceController");

router.get("/admin", authenticate, roleCheck(["Admin"]), adminResource);
router.get("/user", authenticate, roleCheck(["User", "Admin"]), userResource);

module.exports = router;
