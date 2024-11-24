const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  try {
    // Ambil header Authorization
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, msg: "Authorization header missing" });
    }

    // Ambil token dari header
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, msg: "Token missing" });
    }

    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Simpan data pengguna dari token ke req.user
    next(); // Lanjutkan ke handler berikutnya
  } catch (error) {
    console.error(error);
    res
      .status(401)
      .json({
        success: false,
        msg: "Couldn't authenticate",
        error: error.message,
      });
  }
};

module.exports = authenticateUser;
