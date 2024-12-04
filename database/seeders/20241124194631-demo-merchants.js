"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const merchants = [
      { name: "Sate Taichan Lezat", rating: 4.5 },
      { name: "Warung Makan Paijo", rating: 4.2 },
      { name: "Kedai Kopi Sore", rating: 4.8 },
      { name: "Pizza Galore", rating: 4.7 },
      { name: "Toko Roti Manis", rating: 4.3 },
      { name: "Ayam Goreng Sederhana", rating: 4.1 },
      { name: "Roti Bakar Klasik", rating: 4.4 },
      { name: "Mie Goreng Khas Paijo", rating: 4.0 },
      { name: "Dapoer Cinde", rating: 4.3 },
      { name: "Jus Buah Sehat", rating: 4.6 },
      { name: "Kue Cubir Bandung", rating: 4.2 },
      { name: "Soto Ayam Pak Gani", rating: 4.1 },
      { name: "Pisang Bakar Sambel", rating: 4.5 },
      { name: "Kedai Makan Keluarga", rating: 4.0 },
      { name: "Tahu Tempe Kriuk", rating: 4.6 },
      { name: "Nasi Goreng Surya", rating: 4.2 },
      { name: "Es Krim Coklat Manis", rating: 4.7 },
      { name: "Bakso Malang Mantap", rating: 4.4 },
      { name: "Taco Corner", rating: 4.1 },
      { name: "Martabak Ayam Bakar", rating: 4.3 },
      { name: "Dimsum Sehat", rating: 4.6 },
      { name: "Sate Kambing Pak Yanto", rating: 4.2 },
      { name: "Kopi Dolo", rating: 4.8 },
      { name: "Nasi Padang Alim", rating: 4.5 },
      { name: "Kebap House", rating: 4.0 },
      { name: "Cemilan Suka-Suka", rating: 4.2 },
      { name: "Seafood Asli", rating: 4.7 },
      { name: "Kedai Nasi Uduk", rating: 4.3 },
      { name: "Ayam Penyet Bumbu", rating: 4.6 },
      { name: "Sop Buntut Hasyim", rating: 4.0 },
    ];

    const getRandomTime = (start, end) => {
      const startHour = parseInt(start.split(":")[0], 10);
      const endHour = parseInt(end.split(":")[0], 10);
      const randomHour =
        Math.floor(Math.random() * (endHour - startHour + 1)) + startHour;
      const randomMinute = Math.floor(Math.random() * 60);
      return `${String(randomHour).padStart(2, "0")}:${String(
        randomMinute
      ).padStart(2, "0")}:00`;
    };

    const getRandomUserId = () => Math.floor(Math.random() * 5) + 1;

    const merchantRecords = merchants.map((merchant) => ({
      user_id: getRandomUserId(),
      business_name: merchant.name,
      average_rating: merchant.rating,
      status: Math.random() > 0.5 ? "buka" : "tutup",
      opening_time: getRandomTime("07:00", "10:00"),
      closing_time: getRandomTime("17:00", "22:00"),
      created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
      updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    }));

    return queryInterface.bulkInsert("Merchants", merchantRecords);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Merchants", null, {});
  },
};
