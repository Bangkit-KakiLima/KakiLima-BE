const locationService = require('./location.service');

const createLocation = async (req, res) => {
  try {
    const { merchant_id, latitude, longitude } = req.body;
    const location = await locationService.createLocation({
      merchant_id,
      latitude,
      longitude
    });
    res.status(201).json(location);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateLocation = async (req, res) => {
  try {
    const { merchant_id } = req.params;
    const { latitude, longitude } = req.body;
    const location = await locationService.updateLocation({
      merchant_id,
      latitude,
      longitude
    });
    res.json(location);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await locationService.getAllLocations();
    res.json(locations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getLocationByMerchantId = async (req, res) => {
  try {
    const { merchant_id } = req.params;
    const location = await locationService.getLocationByMerchantId(merchant_id);
    res.json(location);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createLocation,
  updateLocation,
  getAllLocations,
  getLocationByMerchantId
};
