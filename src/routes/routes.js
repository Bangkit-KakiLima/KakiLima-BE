const express = require("express");
const authRouter = require("../modules/authModules/auth.route");
const locationRouter = require("../modules/locationModules/location.route");
const merchantRouter = require("../modules/merchantModules/merchant.route");
const productRouter = require("../modules/productModules/product.route");
const addresRouter = require("../modules/addressModules/address.route");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/locations", locationRouter);
router.use("/merchant", merchantRouter);
router.use("/product", productRouter);
router.use("/address", addresRouter);

module.exports = router;
