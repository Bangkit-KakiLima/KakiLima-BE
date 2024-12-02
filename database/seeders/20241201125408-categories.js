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
    await queryInterface.bulkInsert("Categories", [
      { name: "Makanan", createdAt: new Date(), updatedAt: new Date() },
      { name: "Minuman", createdAt: new Date(), updatedAt: new Date() },
      { name: "Cemilan", createdAt: new Date(), updatedAt: new Date() },
      { name: "Kue", createdAt: new Date(), updatedAt: new Date() },
      { name: "Buah-Buahan", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
