const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
var pry = require('pryjs');
// eval(pry.it);

function selectAll(){
  return database.raw("SELECT meals.*, json_agg(foods.*) AS foods FROM meals JOIN meal_foods ON meals.id=meal_foods.meal_id JOIN foods ON meal_foods.food_id=foods.id GROUP BY meals.id;")
}

function destroyAll(){
  return database.raw('TRUNCATE meals RESTART IDENTITY')
}

function create(mealName){
  return database.raw(
    'INSERT INTO meals (name, created_at) VALUES (?, ?) RETURNING id, name',
    [mealName, new Date]
  )
}

module.exports = {
  create,
  destroyAll,
  selectAll
}
