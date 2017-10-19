const Meal = require('../models/meal')

function getMeals(request, response, next){
  database.raw("SELECT * FROM meals")
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    response.json(data.rows)
  })
}

module.exports = {getMeals}
