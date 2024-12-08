const express = require("express");
const controller = require("./adress.controller");
const authMiddleware = require("../authModules/auth.middleware");

const addressRouter = express.Router();

addressRouter.post("/", authMiddleware, controller.CreateAddress);
addressRouter.post(
  "/location",
  authMiddleware,
  controller.CreateCurrentLocation
);
addressRouter.get("/", authMiddleware, controller.GetAddressByUserId);
addressRouter.put("/", authMiddleware, controller.UpdateAddress);
addressRouter.delete("/", authMiddleware, controller.DeleteAddress);
addressRouter.get("/weather", authMiddleware, controller.getWeather);

module.exports = addressRouter;
