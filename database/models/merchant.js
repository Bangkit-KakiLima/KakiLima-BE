'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    static associate(models) {
      Merchant.hasMany(models.Location, {
        foreignKey: 'merchant_id',
        sourceKey: 'merchant_id',
        as: 'location'
      });
    }
  }

  Merchant.init({
    merchant_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    business_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    average_rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  }, {
    sequelize,
    modelName: 'Merchant',
    tableName: 'Merchants',
    underscored: true
  });

  return Merchant;
};
