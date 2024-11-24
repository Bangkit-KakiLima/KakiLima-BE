"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config"); // pastikan file ini sesuai

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // Define association here (if necessary)
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

module.exports = User;
