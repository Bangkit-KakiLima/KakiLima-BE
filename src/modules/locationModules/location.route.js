const express = require('express');
const router = express.Router();
const locationController = require('./location.controller');

router.post('/locations', locationController.createLocation);
router.put('/locations/:merchant_id', locationController.updateLocation);
router.get('/locations', locationController.getAllLocations);
router.get('/locations/:merchant_id', locationController.getLocationByMerchantId);

module.exports = router;
