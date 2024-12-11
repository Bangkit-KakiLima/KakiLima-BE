const service = require("./address.service");

const CreateAddress = async (req, res) => {
  try {
    const { addressName } = req.body;
    const userId = req.user.id;
    const address = await service.createAddress(userId, addressName);
    res.status(201).send({
      success: true,
      message: "Success create address",
      data: address,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create address",
      error: error.message,
    });
  }
};

const CreateCurrentLocation = async (req, res) => {
  try {
    const userId = req.user.id;
    const { lat, lon } = req.body;

    if (!userId || !lat || !lon) {
      return res.status(400).json({
        success: false,
        message: "userId, latitude, and longitude are required",
      });
    }

    const Location = await service.createCurrentUserLocation(userId, lat, lon);

    return res.status(200).json({
      success: true,
      message: "Location updated successfully",
      data: Location,
    });
  } catch (error) {
    console.error("Error in CreateCurrentLocation:", error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the location",
      error: error.message,
    });
  }
};

const GetAddressByUserId = async (req, res) => {
  try {
    const userId = req.user.id;
    const address = await service.getAddressByUserId(userId);
    res.status(200).json({
      success: true,
      message: "User's address retrieved successfully ",
      data: address,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "User's address is not success",
      error: error.message,
    });
  }
};

const UpdateAddress = async (req, res) => {
  try {
    const userId = req.user.id;
    const { addressName } = req.body;
    const address = await service.updateAddress(userId, addressName);
    res.status(200).json({
      success: true,
      message: "Success update user's address",
      data: address,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Update user's address is not success",
      error: error.message,
    });
  }
};

const DeleteAddress = async (req, res) => {
  try {
    const id = req.user.id;
    await service.deleteAddress(id);
    res
      .status(200)
      .json({ success: true, message: "Address deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const getWeather = async (req, res) => {
  try {
    const userId = req.user.id;
    const weather = await service.fetchWeathers(userId);
    res.status(200).json({
      success: true,
      message: "Success get weather based on user's location",
      data: weather,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = {
  CreateAddress,
  GetAddressByUserId,
  UpdateAddress,
  DeleteAddress,
  getWeather,
  CreateCurrentLocation,
};
