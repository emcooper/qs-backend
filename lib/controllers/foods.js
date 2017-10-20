const Meal = require('../models/meal')
const Food = require('../models/food')
const pry = require('pryjs');

function getFoods(request, response, next){
  Food.selectAll()
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    response.json(data.rows)
  })
}

function getFood(request, response, next) {
  let id = request.params.id
  Food.selectFood(id)
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    response.json(data.rows)
  })
}

function postFood(request, response, next){
  let params = request.query
  Food.createFood(params['name'], params['calories'])
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    response.json(data.rows)
  })
}

function patchFood(request, response, next) {
  let id = request.params.id
  let food = Food.selectFood(id)
  let name = food['name']
  let calories = food['calories']
  if(request.query['name'] != null){
    name = request.query['name']
  }
  if(request.query['calories'] != null){
    calories = request.query['calories']
  }
  Food.updateFood(name, calories, id)
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    response.json(data.rows)
  })

}

function deleteFood(request, response, next){
  let id = request.params.id
  Food.deleteFood(id)
  .then(function(data){
    if (data.rowCount == 0) { return response.sendStatus(404) }
    response.json(data.rows)
  })
}

module.exports = {getFoods, getFood, postFood, deleteFood, patchFood}
