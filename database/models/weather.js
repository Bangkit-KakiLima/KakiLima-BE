"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Weather.belongsTo(models.Address, {
        foreignKey: "address_id",
      });
    }
  }
  Weather.init(
    {
      address_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Addresses",
          key: "id",
        },
      },
      temperature: DataTypes.FLOAT,
      weather_main: DataTypes.STRING,
      weather_desc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Weather",
    }
  );
  return Weather;
};
