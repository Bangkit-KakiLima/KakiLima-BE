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

const GetAddressByUserId = async (req, res) => {
  try {
    const userId = req.user.id;
    const address = await service.getAddressByUserId(userId);
    res.status(200).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const UpdateAddress = async (req, res) => {
  try {
    const userId = req.user.id;
    const { addressName } = req.body;
    const address = await service.updateAddress(userId, addressName);
    res.status(200).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const DeleteAddress = async (req, res) => {
  try {
    const id = req.user.id;
    await service.deleteAddress(id);
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getWeather = async (req, res) => {
  try {
    const userId = req.user.id;
    const weather = await service.fetchWeathers(userId);
    res.status(200).json(weather);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  CreateAddress,
  GetAddressByUserId,
  UpdateAddress,
  DeleteAddress,
  getWeather,
};
