const locationService = require("./location.service");

const createLocation = async (req, res) => {
  try {
    const { merchant_id, latitude, longitude } = req.body;
    const location = await locationService.createLocation({
      merchant_id,
      latitude,
      longitude,
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
      longitude,
    });
    res.json(location);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const locations = await locationService.getAllLocations();
    const modifiedLocations = locations.map((location) => {
      const merchant = location.merchant ? location.merchant.toJSON() : null;

      if (merchant && merchant.products) {
        merchant.products = merchant.products.map((product) => {
          return {
            ...product,
            image: product.image
              ? `${baseUrl}/images/products/${product.image}`
              : null,
          };
        });
      }

      return {
        ...location.toJSON(),
        merchant,
      };
    });
    res.status(200).json(modifiedLocations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getLocationByMerchantId = async (req, res) => {
  try {
    const { merchant_id } = req.params;
    const baseUrl = `${req.protocol}://${req.get("host")}`;

    const location = await locationService.getLocationByMerchantId(merchant_id);

    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }

    const merchant = location.merchant ? location.merchant.toJSON() : null;

    if (merchant && merchant.products) {
      merchant.products = merchant.products.map((product) => {
        return {
          ...product,
          image: product.image
            ? `${baseUrl}/images/products/${product.image}`
            : null,
        };
      });
    }

    const modifiedLocation = {
      ...location.toJSON(),
      merchant,
    };

    res.status(200).json(modifiedLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createLocation,
  updateLocation,
  getAllLocations,
  getLocationByMerchantId,
};
