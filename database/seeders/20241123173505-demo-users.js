'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
     await queryInterface.bulkInsert('Users', [
       {
	username: 'seller1',
        email: 'seller1@example.com',
        password: 'password1',
        otp_code: null,
        otp_expiration: null,
        is_verified: true,
        address: 'Jl. Braga, Bandung',
        role: 'seller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'buyer1',
        email: 'buyer1@example.com',
        password: 'password2',
        otp_code: null,
        otp_expiration: null,
        is_verified: false,
        address: 'Jl. Asia Afrika, Bandung',
        role: 'buyer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
     await queryInterface.bulkDelete('Users', null, {});
  }
};
