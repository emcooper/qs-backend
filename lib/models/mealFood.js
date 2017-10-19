const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const Foods = require('../models/Foods')
var pry = require('pryjs');
// eval(pry.it);


function selectFoodsByMeal(mealId){
  mealFoods = database.raw("SELECT * FROM meal_foods WHERE id=?", [id])
  mealFoods.map(function(mealFood){

  })

}
