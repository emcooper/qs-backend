const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
var pry = require('pryjs');

function selectAll(){
  return database.raw("SELECT * FROM meals")
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
