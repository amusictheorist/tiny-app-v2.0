const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const URL = sequelize.define('URL', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  shortURL: {
    type: DataTypes.STRING,
    allowNull: false
  },
  longURL: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = URL;