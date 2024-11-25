"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // Define associations here
      // Example: this.hasMany(models.Post);
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      otp_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      otp_expiration: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM("seller", "buyer"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      timestamps: true,
    }
  );

  return User;
};
