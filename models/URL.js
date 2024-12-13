const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const URL = sequelize.define('URL', {
  shortURL: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  longURL: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = URL;