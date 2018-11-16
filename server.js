const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Todo = require('./api/models/Todo')
const routes = require('./api/routes/api')
const utilities = require('./utilities/Utilities')
const api = require('./services/api')

const port = 3000
const app = express()

mongoose.Promise = global.Promise

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

app.listen(port)

console.log('RESTful API server started on: ' + port)