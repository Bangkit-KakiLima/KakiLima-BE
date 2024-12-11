const { where } = require("sequelize");
const db = require("../../../database/models");
const fs = require("fs");
const path = require("path");
const { parse } = require("json2csv");
const { raw } = require("express");
const { default: axios } = require("axios");
const {
  Product,
  Product_Category_Mapping,
  Merchant,
  Category,
  Weather,
  Address,
} = db;
require("dotenv").config();
const ML_URL =
  "https://kakilima-ml-741985344530.asia-southeast2.run.app/recommend";

const CreateProduct = async (data, categoryIds, imagePath) => {
  const { name, description, price, merchant_id } = data;

  try {
    const product = await Product.create({
      name,
      description,
      price,
      merchant_id,
      image: imagePath,
    });

    if (categoryIds && Array.isArray(categoryIds)) {
      const mappings = categoryIds.map((category_id) => ({
        product_id: product.id,
        category_id: category_id,
      }));
      await Product_Category_Mapping.bulkCreate(mappings);
    }

    return await GetProductById(product.id);
  } catch (error) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
};

const GetAllProduct = async () => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Merchant,
          as: "merchant",
          attributes: [
            "id",
            "user_id",
            "business_name",
            "average_rating",
            "status",
          ],
        },
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return products;
  } catch (error) {
    console.error(`Failed to retrieve products: ${error.message}`);
    return new Error(`Failed to retrieve products: ${error.message}`);
  }
};

const GetProductById = async (id) => {
  try {
    const product = await Product.findOne({
      where: { id },
      include: [
        {
          model: Merchant,
          as: "merchant",
          attributes: [
            "id",
            "user_id",
            "business_name",
            "average_rating",
            "status",
          ],
        },
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    });
    return product;
  } catch (error) {
    console.error(`Failed to retrieve products: ${error.message}`);
    return new Error(`Failed to retrieve product: ${error.message}`);
  }
};

const UpdateProduct = async (productId, data, categoryIds, imagePath) => {
  try {
    const product = await Product.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    const { name, description, price, merchant_id } = data;

    const updatedData = {
      name: name,
      description: description,
      price: price,
      merchant_id: merchant_id,
    };
    if (imagePath) {
      updatedData.image = imagePath;
    }

    await product.update(updatedData);

    if (Array.isArray(categoryIds) && categoryIds.length > 0) {
      await Product_Category_Mapping.destroy({
        where: { product_id: productId },
      });

      const mappings = categoryIds.map((category_id) => ({
        product_id: product.id,
        category_id,
      }));
      await Product_Category_Mapping.bulkCreate(mappings);
    }

    return await Product.findOne({
      where: { id: productId },
      include: [
        {
          model: Merchant,
          as: "merchant",
          attributes: [
            "id",
            "user_id",
            "business_name",
            "average_rating",
            "status",
          ],
        },
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    });
  } catch (error) {
    throw new Error(`Failed to update product: ${error.message}`);
  }
};

const DeleteProduct = async (productId) => {
  try {
    const product = await Product.findOne({
      where: { id: productId },
    });
    if (!product) throw new Error("Product not found");

    if (product.image) {
      const imagePath = path.join(
        __dirname,
        "../../public/images/products",
        product.image
      );
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await product.destroy();
    return { message: "Product deleted successfully" };
  } catch (error) {
    throw new Error(`Failed to delete product: ${error.message} `);
  }
};

const GetRecommendationProduct = async () => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Merchant,
          as: "merchant",
          attributes: [
            "id",
            "user_id",
            "business_name",
            "average_rating",
            "status",
          ],
        },
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
      order: [[{ model: Merchant, as: "merchant" }, "average_rating", "DESC"]],
      limit: 5,
    });
    return products;
  } catch (error) {
    console.error(`Failed to retrieve products: ${error.message}`);
    return new Error(`Failed to retrieve products: ${error.message}`);
  }
};

const ExportToCSV = async () => {
  const products = await Product.findAll({
    raw: true,
  });

  if (products.length === 0) {
    throw new Error("No products found");
  }

  const fields = [
    "id",
    "merchant_id",
    "name",
    "description",
    "price",
    "image",
    "createdAt",
    "updatedAt",
  ];
  const opts = { fields };
  const csv = parse(products, opts);

  return csv;
};

const GetProductsByCategoryName = async (categoryName) => {
  try {
    const products = Product.findAll({
      include: [
        {
          model: Merchant,
          as: "merchant",
          attributes: [
            "id",
            "user_id",
            "business_name",
            "average_rating",
            "status",
          ],
        },
        {
          model: Category,
          as: "category",
          where: { name: categoryName },
          attributes: ["id", "name"],
        },
      ],
    });
    return products;
  } catch (error) {
    throw new Error(`Failed to retrieve products: ${error.message}`);
  }
};

const MachineLearningRecommendation = async (user_id) => {
  try {
    const weather = await Weather.findOne({
      include: [
        {
          model: Address,
          where: {
            user_id: user_id,
          },
          required: true,
        },
      ],
    });

    request_body = {
      user_id: user_id,
      weather_main: weather.weather_main,
      temp_min: weather.temperature,
      temp_max: weather.temperature,
    };

    const result = await axios.post(ML_URL, request_body);
    data = result.data.recommendations;

    const products = [];

    for (const rec of data) {
      const product = await Product.findOne({
        where: { id: rec.id },
        include: [
          {
            model: Merchant,
            as: "merchant",
            attributes: [
              "id",
              "user_id",
              "business_name",
              "average_rating",
              "status",
            ],
          },
          {
            model: Category,
            as: "category",
            attributes: ["id", "name"],
          },
        ],
      });

      if (product) {
        products.push(product);
      }
    }

    return products;
  } catch (error) {
    console.error(
      "Error in MachineLearningRecommendation:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch recommendations from ML service");
  }
};

module.exports = {
  CreateProduct,
  GetAllProduct,
  GetProductById,
  UpdateProduct,
  DeleteProduct,
  GetRecommendationProduct,
  ExportToCSV,
  GetProductsByCategoryName,
  MachineLearningRecommendation,
};
