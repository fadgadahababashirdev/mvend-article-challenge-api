'use strict';
const { Model } = require('sequelize');
const sequelize = require('../../config/database');
import Sequelize from 'sequelize';
module.exports = sequelize.define('users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  role: {
    type: Sequelize.ENUM,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
});
