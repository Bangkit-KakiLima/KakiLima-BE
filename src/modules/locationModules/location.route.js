const express = require("express");
const router = express.Router();
const locationController = require("./location.controller");

router.post("/", locationController.createLocation);
router.put("/:merchant_id", locationController.updateLocation);
router.get("/", locationController.getAllLocations);
router.get("/:merchant_id", locationController.getLocationByMerchantId);

module.exports = router;
