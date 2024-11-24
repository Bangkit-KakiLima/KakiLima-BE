"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Location extends Model {
  static associate(models) {
    this.belongsTo(models.Merchant, {
      foreignKey: 'merchant_id',
      as: 'merchant'
    });
  }
}

Location.init(
  {
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
      allowNull: false,
    },
    longitude: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Location",
    tableName: "Locations",
    timestamps: true,
  }
);

module.exports = Location;
