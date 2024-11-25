'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Merchants', [
      {
        merchant_id: uuidv4(),
        business_name: 'Bakso Mang',
        average_rating: 4.5,
        status: 'active',
      },
      {
        merchant_id: uuidv4(),
        business_name: 'Usus Mantap',
        average_rating: 3.8,
        status: 'active',
      },
      {
        merchant_id: uuidv4(),
        business_name: 'EsThree Tiga',
        average_rating: 4.0,
        status: 'inactive',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Merchants', null, {});
  },
};

