"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Merchant extends Model {
  static associate(models) {
    this.hasMany(models.Location, {
      foreignKey: 'merchant_id',
      as: 'location'
    });
  }
}

Merchant.init(
  {
    merchant_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    business_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    average_rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
  },
  {
    sequelize,
    modelName: "Merchant",
    tableName: "Merchants",
    timestamps: true,
  }
);

module.exports = Merchant;
