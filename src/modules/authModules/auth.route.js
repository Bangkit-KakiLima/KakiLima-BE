const express = require("express");
const authRouter = express.Router();
const authMiddleWare = require("./auth.middleware");
const ctrl = require("./auth.controller");

authRouter.post("/register", ctrl.Register);
authRouter.post("/resend_otp", ctrl.ResendOTP);
authRouter.post("/verify", ctrl.VerifyEmail);
authRouter.post("/login", ctrl.Login);
authRouter.get("/userData", authMiddleWare, ctrl.LoggedUsers);

module.exports = authRouter;
