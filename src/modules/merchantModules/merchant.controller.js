const MerchantService = require('./merchant.service');

const createMerchant = async (req, res) => {
  try {
    const { user_id, business_name, average_rating, status } = req.body;
    const Merchant = await MerchantService.createMerchant({
      user_id,
      business_name,
      average_rating,
      status
    });
    res.status(201).json(Merchant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateMerchant = async (req, res) => {
  try {
    const { id } = req.params;
    const { business_name, average_rating, status } = req.body;
    const merchant = await MerchantService.updateMerchant(id, {
      business_name,
      average_rating,
      status
    });
    res.json(merchant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllMerchants = async (req, res) => {
  try {
    const Merchants = await MerchantService.getAllMerchants();
    res.json(Merchants);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getMerchantByMerchantId = async (req, res) => {
  try {
    const { id } = req.params;
    const Merchant = await MerchantService.getMerchantByMerchantId(id);
    res.json(Merchant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMerchant = async (req, res) => {
  try {
    const { id } = req.params;
    await MerchantService.deleteMerchant(id);
    res.status(200).json({ message: "deleted"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createMerchant,
  updateMerchant,
  getAllMerchants,
  getMerchantByMerchantId,
  deleteMerchant
};
