const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
var pry = require('pryjs');

function selectAll(){
  return database.raw("SELECT * FROM foods")
}

function createFood(name, calories){
  return database.raw(
    'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?) RETURNING id, name',
    [name, calories, new Date]
  )
}

function updateFood(name, calories, id) {
  return database.raw(
    'UPDATE foods SET name = ?, calories = ? WHERE id = ? ',
    [name, calories, id]
  )
}

function selectFood(id){
  return database.raw("SELECT * FROM foods WHERE id = ?", id)
}

function deleteFood(id) {
  return database.raw("DELETE FROM foods WHERE id = ?", id)
}

module.exports = {selectAll, createFood, selectFood, deleteFood, updateFood}
