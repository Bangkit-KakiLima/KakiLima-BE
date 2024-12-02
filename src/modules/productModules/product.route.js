const Controller = require("./product.controller");
const Upload = require("./product.middleware");
const express = require("express");
const ProductRouter = express.Router();

ProductRouter.post("/", Upload.single("image"), Controller.CreateProduct);
ProductRouter.get("/", Controller.GetAllProducts);
ProductRouter.get("/recommendations", Controller.GetRecommendationProduct);
ProductRouter.get("/:id", Controller.GetProductById);
ProductRouter.put("/:id", Upload.single("image"), Controller.UpdateProduct);
ProductRouter.delete("/:id", Controller.DeleteProduct);

module.exports = ProductRouter;
