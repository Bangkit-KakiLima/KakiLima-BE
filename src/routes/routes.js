const express = require("express");
const authRouter = require("../modules/authModules/auth.route");
const locationRouter = require("../modules/locationModules/location.route");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/api", locationRouter);
module.exports = router;
