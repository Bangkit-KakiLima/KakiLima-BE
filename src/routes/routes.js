const express = require("express");
const authRouter = require("../modules/authModules/auth.route");
const router = express.Router();

router.use("/auth", authRouter);

module.exports = router;
