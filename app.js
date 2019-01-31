const express = require('express')
const Sequelize = require('sequelize')
var bodyParser = require('body-parser')
const app = express()
var cors = require('cors')
const events_routes = require('./routes/events')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//init db
require('./db');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/',events_routes);

app.listen(4200,'0.0.0.0', () => {
    console.log('Server is up and running on port number 4200' );})
//app.listen(8080,'172.24.42.71')

