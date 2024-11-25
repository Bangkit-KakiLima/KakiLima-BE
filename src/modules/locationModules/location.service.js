const db = require('../../../database/models');
const { Location, Merchant } = db;

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

const getAllLocations = async () => {
  try {
    console.log('Models available:', Object.keys(db));

    const locations = await Location.findAll({
      include: [{
        model: Merchant,
        as: 'merchant',
        required: false
      }],
      logging: console.log // TODO: Delete in production mode
    });

    console.log('Locations found:', locations ? locations.length : 0);
    return locations || [];
  } catch (error) {
    console.error('Error in getAllLocations:', error);
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

const getLocationByMerchantId = async (merchant_id) => {
  try {
    const location = await Location.findOne({
      where: { merchant_id },
      include: [{
        model: Merchant,
        as: 'merchant',
        required: false
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
  getAllLocations,
  updateLocation,
  getLocationByMerchantId
};
