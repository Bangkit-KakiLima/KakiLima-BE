'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      Location.belongsTo(models.Merchant, {
        foreignKey: 'merchant_id',
        targetKey: 'merchant_id',
        as: 'merchant'
      });
    }
  }

  Location.init({
    merchant_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Merchants',
        key: 'merchant_id'
      }
    },
    latitude: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    longitude: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Location',
    tableName: 'Locations',
    underscored: true
  });

  return Location;
};
