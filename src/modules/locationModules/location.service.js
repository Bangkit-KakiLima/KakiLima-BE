const Location = require('../../../database/models/location');
const Merchant = require('../../../database/models/merchant');

const createLocation = async ({ merchant_id, latitude, longitude }) => {
  try {
    const merchant = await Merchant.findOne({ where: { merchant_id } });
    if (!merchant) throw new Error('Merchant not found');

    const location = await Location.create({
      merchant_id,
      latitude,
      longitude
    });

    return location;
  } catch (error) {
    throw error;
  }
};

const updateLocation = async ({ merchant_id, latitude, longitude }) => {
  try {
    const [updatedRows, [updatedLocation]] = await Location.update(
      { latitude, longitude },
      {
        where: { merchant_id },
        returning: true
      }
    );

    if (updatedRows === 0) throw new Error('Location not found');
    return updatedLocation;
  } catch (error) {
    throw error;
  }
};

const getAllLocations = async () => {
  try {
    const locations = await Location.findAll({
      include: [{
        model: Merchant,
        as: 'merchant'
      }]
    });
    return locations;
  } catch (error) {
    throw error;
  }
};

const getLocationByMerchantId = async (merchant_id) => {
  try {
    const location = await Location.findOne({
      where: { merchant_id },
      include: [{
        model: Merchant,
        as: 'merchant'
      }]
    });
    if (!location) throw new Error('Location not found');
    return location;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createLocation,
  updateLocation,
  getAllLocations,
  getLocationByMerchantId
};
