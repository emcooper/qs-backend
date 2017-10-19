const Meal = require('../models/meal')
var pry = require('pryjs');

function getMeals(request, response, next){
  Meal.selectAll()
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    response.json(data.rows)
  })
}

module.exports = {getMeals}
