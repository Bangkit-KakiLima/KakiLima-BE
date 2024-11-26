const express = require('express');
const router = express.Router();
const merchantController = require('./merchant.controller');

router.post('/merchants', merchantController.createMerchant);
router.put('/merchants/:id', merchantController.updateMerchant);
router.get('/merchants', merchantController.getAllMerchants);
router.get('/merchants/:id', merchantController.getMerchantByMerchantId);
router.delete('/merchants/:id', merchantController.deleteMerchant);
module.exports = router;
