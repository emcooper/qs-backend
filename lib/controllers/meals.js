const Meal = require('../models/meal')

function getMeals(request, response, next){
  Meal.selectAll()
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    response.json(data.rows)
  })
}

function getMeal(request, response, next){
  var id = request.params.meal_id
  Meal.selectById(id)
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    response.json(data.rows)
  })
}

function postMealFood(request, response, next){
  var foodId = request.params.food_id
  var mealId = request.params.meal_id
  Meal.addFood(foodId, mealId)
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    response.json(data.rows)
  })
}

function deleteMealFood(request, response, next){
  var foodId = request.params.food_id
  var mealId = request.params.meal_id
  Meal.deleteFood(foodId, mealId)
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    response.json(data.rows)
  })
}

module.exports = {getMeals, getMeal, postMealFood, deleteMealFood}
