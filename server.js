var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const Meal = require('./lib/models/meal')
const Meals = require('./lib/controllers/meals')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PATCH, GET, DELETE, OPTIONS")
  next();
});

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Quantified Self'
app.locals.secrets = {

}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app

app.get('/api/v1/meals', Meals.getMeals)
app.get('/api/v1/meals/:meal_id/foods', Meals.getMeal)
app.post('/api/v1/meals/:meal_id/foods/:food_id', Meals.postMealFood)
app.delete('/api/v1/meals/:meal_id/foods/:food_id', Meals.deleteMealFood)


if(!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(app.locals.title + " is running on " + app.get('port') + ".")
  })
}
