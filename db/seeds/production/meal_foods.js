exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meal_foods RESTART IDENTITY')
  .then(function() {
    return Promise.all([
      knex.raw(
        'INSERT INTO meal_foods (meal_id, food_id, created_at) VALUES (?, ?, ?)',
        [1, 1, new Date]
      ),
      knex.raw(
        'INSERT INTO meal_foods (meal_id, food_id, created_at) VALUES (?, ?, ?)',
        [1, 2, new Date]
      ),
      knex.raw(
        'INSERT INTO meal_foods (meal_id, food_id, created_at) VALUES (?, ?, ?)',
        [2, 3, new Date]
      ),
      knex.raw(
        'INSERT INTO meal_foods (meal_id, food_id, created_at) VALUES (?, ?, ?)',
        [2, 4, new Date]
      ),
      knex.raw(
        'INSERT INTO meal_foods (meal_id, food_id, created_at) VALUES (?, ?, ?)',
        [3, 5, new Date]
      ),
      knex.raw(
        'INSERT INTO meal_foods (meal_id, food_id, created_at) VALUES (?, ?, ?)',
        [3, 6, new Date]
      ),
      knex.raw(
        'INSERT INTO meal_foods (meal_id, food_id, created_at) VALUES (?, ?, ?)',
        [4, 7, new Date]
      ),
      knex.raw(
        'INSERT INTO meal_foods (meal_id, food_id, created_at) VALUES (?, ?, ?)',
        [4, 8, new Date]
      )
    ]);
  });
};
