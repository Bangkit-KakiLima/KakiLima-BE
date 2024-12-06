const axios = require("axios");
const { Address, Weather, User } = require("../../../database/models");
const { format } = require("sequelize/lib/utils");
const { parse } = require("dotenv");
const { where } = require("sequelize");
require("dotenv").config();

const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search";
const OPENWEATHERMAP_URL = "https://api.openweathermap.org/data/2.5/weather";
const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

const createAddress = async (userId, addressName) => {
  const geocodeResponse = await axios.get(NOMINATIM_URL, {
    params: {
      q: addressName,
      format: "json",
    },
  });

  if (!geocodeResponse.data || geocodeResponse.data.length === 0) {
    throw new Error("Address not found");
  }

  const { lat, lon, display_name } = geocodeResponse.data[0];

  let address = await Address.findOne({
    where: { user_id: userId },
  });

  if (address) {
    address.address_name = display_name;
    address.latitude = parseFloat(lat);
    address.longitude = parseFloat(lon);
    await address.save();
  } else {
    address = await Address.create({
      user_id: userId,
      address_name: display_name,
      latitude: parseFloat(lat),
      longitude: parseFloat(lon),
    });
  }

  return address;
};

const getAddressByUserId = async (userId) => {
  return await Address.findOne({
    where: { user_id: userId },
    include: [
      {
        model: User,
        as: "User",
        attributes: ["id", "username", "email", "role"],
      },
    ],
  });
};

const updateAddress = async (userId, addressName) => {
  const geocodeResponse = await axios.get(NOMINATIM_URL, {
    params: {
      q: addressName,
      format: "json",
    },
  });

  if (!geocodeResponse.data || geocodeResponse.data.length === 0) {
    throw new Error("Address not found");
  }

  const { lat, lon, display_name } = geocodeResponse.data[0];

  const address = await Address.findOne({
    where: { user_id: userId },
  });

  if (!address) {
    throw new Error("User location not found. Please create first");
  }

  address.address_name = display_name;
  address.latitude = parseFloat(lat);
  address.longitude = parseFloat(lon);

  await address.save();
  return address;
};

const deleteAddress = async (userId) => {
  const address = await Address.findOne({
    where: { user_id: userId },
  });
  if (!address) {
    throw new Error("Address not found");
  }

  await address.destroy();
  return true;
};

const fetchWeathers = async (userId) => {
  const address = await getAddressByUserId(userId);
  if (!address) {
    throw new Error("Address not found");
  }

  const weatherResponse = await axios.get(OPENWEATHERMAP_URL, {
    params: {
      lat: address.latitude,
      lon: address.longitude,
      appid: OPENWEATHERMAP_API_KEY,
      units: "metric",
    },
  });

  const { temp } = weatherResponse.data.main;
  const { main, description } = weatherResponse.data.weather[0];

  let weather = await Weather.findOne({
    where: { address_id: address.id },
  });

  if (weather) {
    weather.temperature = temp;
    weather.weather_main = main;
    weather.weather_desc = description;
    await weather.save();
  } else {
    weather = await Weather.create({
      address_id: address.id,
      temperature: temp,
      weather_main: main,
      weather_desc: description,
    });
  }

  return weather;
};

module.exports = {
  createAddress,
  getAddressByUserId,
  updateAddress,
  deleteAddress,
  fetchWeathers,
};
