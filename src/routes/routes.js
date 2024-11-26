const express = require("express");
const authRouter = require("../modules/authModules/auth.route");
const locationRouter = require("../modules/locationModules/location.route");
const merchantRouter = require("../modules/merchantModules/merchant.route");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/api", locationRouter);
router.use("/api", merchantRouter);

module.exports = router;
