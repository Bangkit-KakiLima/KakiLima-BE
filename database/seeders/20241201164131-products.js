"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Products", [
      {
        name: "Nasi Goreng Spesial",
        merchant_id: 16,
        description: "Nasi goreng lezat dengan tambahan telur dan ayam.",
        price: 25000.0,
        image: "NasiGoreng.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mie Goreng",
        merchant_id: 8,
        description: "Mie goreng lezat dengan tambahan telur dan ayam.",
        price: 20000.0,
        image: "MieGoreng.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mie Lendir",
        merchant_id: 2,
        description: "Mie Lendir lezat dengan tambahan telur dan ayam.",
        price: 15000.0,
        image: "MieLendir.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Baso Malang",
        merchant_id: 18,
        description: "Bakso Malang lezat dengan kuah gurih dan enak.",
        price: 15000.0,
        image: "BasoMalang.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Batagor",
        merchant_id: 26,
        description: "Batagor Ikan lezat dengan kuah kering dari kacang.",
        price: 10000.0,
        image: "Batagor.png", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Cendol",
        merchant_id: 26,
        description: "Es cendol seger",
        price: 10000.0,
        image: "EsCendol.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Teler",
        merchant_id: 26,
        description: "Es teler seger",
        price: 15000.0,
        image: "EsTeler.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
