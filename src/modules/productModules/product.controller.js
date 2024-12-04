const service = require("./product.service");

const CreateProduct = async (req, res, next) => {
  try {
    const { name, description, price, merchant_id, category_id } = req.body;

    if (!name || !description || !price || !merchant_id) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const data = {
      name,
      description,
      price,
      merchant_id,
    };

    const imagePath = req.file ? req.file.filename : null;

    const product = await service.CreateProduct(data, category_id, imagePath);

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const imageUrl = product.image
      ? `${baseUrl}/images/products/${product.image}`
      : null;

    res.status(201).json({
      success: true,
      message: "Product Created successfully",
      data: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: imageUrl,
        merchant: product.merchant,
        categories: product.category,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

const GetAllProducts = async (req, res, next) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  try {
    const products = await service.GetAllProduct();
    if (!products) {
      res
        .status(404)
        .send({ success: false, message: "Failed to retrieve all products" });
    }
    const modifiedProducts = products.map((product) => {
      return {
        ...product.toJSON(),
        image: product.image
          ? `${baseUrl}/images/products/${product.image}`
          : null,
      };
    });
    res.status(200).send({
      success: true,
      message: "All products retrieved successfully",
      data: modifiedProducts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
};

const GetProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.GetProductById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const imageUrl = product.image
      ? `${baseUrl}/images/products/${product.image}`
      : null;

    res.status(200).json({
      success: true,
      message: "Product retrieved successfully",
      data: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: imageUrl,
        merchant: product.merchant,
        categories: product.category,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the product",
      error: error.message,
    });
  }
};

const GetRecommendationProduct = async (req, res, next) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  try {
    const products = await service.GetRecommendationProduct();
    if (!products) {
      res.status(404).send({
        success: false,
        message: "Failed to retrieve recommendation products",
      });
    }
    const modifiedProducts = products.map((product) => {
      return {
        ...product.toJSON(),
        image: product.image
          ? `${baseUrl}/images/products/${product.image}`
          : null,
      };
    });
    res.status(200).send({
      success: true,
      message: "All recommendation products retrieved successfully",
      data: modifiedProducts,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const UpdateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, merchant_id, category_id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const data = {
      name,
      description,
      price,
      merchant_id,
    };

    const imagePath = req.file ? req.file.filename : null;

    const categoryIds = Array.isArray(category_id)
      ? category_id.map((id) => parseInt(id, 10)).filter((id) => !isNaN(id))
      : [];

    const product = await service.UpdateProduct(
      id,
      data,
      categoryIds,
      imagePath
    );

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const imageUrl = product.image
      ? `${baseUrl}/images/products/${product.image}`
      : null;

    res.status(201).send({
      success: true,
      message: "Product updated successfully",
      data: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: imageUrl,
        merchant: product.merchant,
        categories: product.category,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

const DeleteProduct = async (req, res, next) => {
  try {
    const result = await service.DeleteProduct(req.params.id);
    res.status(200).send({ success: true, message: result.message });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.error(error);
  }
};

const ExportToCSV = async (req, res) => {
  try {
    const csvData = await service.ExportToCSV();
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=products.csv");

    res.status(200).send(csvData);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  CreateProduct,
  GetAllProducts,
  GetProductById,
  UpdateProduct,
  DeleteProduct,
  GetRecommendationProduct,
  ExportToCSV,
};
