const express = require("express");
const authRouter = require("../modules/authModules/auth.route");
const locationRouter = require("../modules/locationModules/location.route");
const merchantRouter = require("../modules/merchantModules/merchant.route");
const productRouter = require("../modules/productModules/product.route");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/location", locationRouter);
router.use("/merchant", merchantRouter);
router.use("/product", productRouter);

module.exports = router;
