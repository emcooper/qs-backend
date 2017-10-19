var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const Meal = require('./lib/models/meal')
const Meals = require('./lib/controllers/meals')

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Quantified Self'
app.locals.secrets = {

}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app

app.get('/api/v1/meals', Meals.getMeals)
