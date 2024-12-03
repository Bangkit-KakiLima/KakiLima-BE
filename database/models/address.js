"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "User",
      });

      Address.hasOne(models.Weather, {
        foreignKey: "address_id",
      });
    }
  }
  Address.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      address_name: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
