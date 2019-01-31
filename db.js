const {Sequelize, DataTypes} = require('sequelize');
const eventModel = require('./models/events')
const sequelize = new Sequelize('db0', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

//for (const m of Object.values(models)) m.init(sequelize);

const Event = eventModel(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  
  // force: true will drop the table if it already exists
  sequelize.sync({force: false}).then(() => {
    // Table created
    return Event.create({
      name: 'John',
      category: 'Hancock',
      place: 'xert'
    });
  });
/*
  Events.findAll().then(events => {
    console.log(events)
  })
*/
  module.exports = {
    sequelize,
    Event
  }
