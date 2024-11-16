const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const db = require("./database/config/db.config");
const router = require("./src/routes/routes"); //imported routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Simulasi error pada route
app.get("/error", async (req, res, next) => {
  try {
    throw new Error("Simulated error!");
  } catch (err) {
    next(err); // Kirim error ke global handler
  }
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  // Hanya log error ke console
  console.error("Error:", err.message || err);
  // Kirimkan respons error ke client (Postman)
  res.status(err.status || 500).json({
    success: false,
    message: err.message, // Pesan error yang lebih umum
  });
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});

db.authenticate()
  .then(() => {
    console.log("DB Connected");
    return db.sync({ alter: true });
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });
