const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, msg: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, msg: "Token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    let errorMessage = "Couldn't authenticate";

    // Token specific errors
    if (error.name === "TokenExpiredError") {
      errorMessage = "Token has expired";
    } else if (error.name === "JsonWebTokenError") {
      errorMessage = "Invalid token";
    }

    res.status(401).json({
      success: false,
      msg: errorMessage,
      error: error.message,
    });
  }
};

module.exports = authenticateUser;
