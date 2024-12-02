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
    await queryInterface.bulkInsert("Product_Category_Mappings", [
      {
        product_id: 4,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 5,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 6,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 7,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 8,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 9,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 10,
        category_id: 2,
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
  },
};
