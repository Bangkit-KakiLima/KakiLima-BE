"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    static associate(models) {
      Merchant.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
      Merchant.hasOne(models.Location, {
        foreignKey: "merchant_id",
        as: "location",
      });
      Merchant.hasMany(models.Product, {
        foreignKey: "merchant_id",
        as: "product",
      });
    }
  }

  Merchant.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        references: {
          model: "Users",
          key: "id",
        },
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
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
      },
    },
    {
      sequelize,
      modelName: "Merchant",
      tableName: "Merchants",
      underscored: true,
    }
  );

  return Merchant;
};
