const express = require('express')
const Sequelize = require('sequelize')
var bodyParser = require('body-parser')
const app = express()
const events_routes = require('./routes/events')

//init db
require('./db');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/',events_routes);

//app.get('/', (req, res) => res.send('Hello World les gens!'))

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.listen(8080,'127.0.0.1', () => {
    console.log('Server is up and running on port number 8080' );})
//app.listen(8080,'172.24.42.71')
