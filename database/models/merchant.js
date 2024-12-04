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
        as: "merchant",
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
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
          isIn: {
            args: [["buka", "tutup"]],
            msg: "Status must be either 'buka' or 'tutup'",
          },
        },
      },
      opening_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      closing_time: {
        type: DataTypes.TIME,
        allowNull: false,
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
