const Meal = require('../models/meal')
const MealFoods = require('../models/mealFoods')
var pry = require('pryjs');

function getMeals(request, response, next){
  Meal.selectAll()
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    data.rows.forEach(function(row){
      foodsList = MealFoods.selectFoodsByMeal(meal.id)
      Object.assign(row, {foods: foodsList})
    })
    response.json(data.rows)
  })
}

module.exports = {getMeals}
