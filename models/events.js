const { DataTypes } = require('sequelize');
//const { sequelize } = require('../db');

module.exports = (sequelize, type) => {
    return sequelize.define('events', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    category: {
        type: DataTypes.STRING,
    },

    place: {
        type: DataTypes.STRING,
    },

    address: {
        type: DataTypes.STRING,
    },

    initDate: {
        type: DataTypes.DATE
    },

    endDate: {
        type: DataTypes.DATE,
    },

    type: {
        type: DataTypes.BOOLEAN
    },
  });
  
  // force: true will drop the table if it already exists
  Events.sync({force: false}).then(() => {
    // Table created
    return Events.create({
      name: 'John',
      category: 'Hancock',
      place: 'xert'
    });
  });
}