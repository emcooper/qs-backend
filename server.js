var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Secret Box'
app.locals.secrets = {

}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app
