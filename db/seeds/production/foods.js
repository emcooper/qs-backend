exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE foods RESTART IDENTITY')
  .then(function() {
    return Promise.all([
      knex.raw(
        'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
        ["potatoes", 300, new Date]
      ),
      knex.raw(
        'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
        ["cereal", 200, new Date]
      ),
      knex.raw(
        'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
        ["bananas", 100, new Date]
      ),
      knex.raw(
        'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
        ["icecream", 280, new Date]
      ),
      knex.raw(
        'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
        ["steak", 400, new Date]
      ),
      knex.raw(
        'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
        ["bagel", 250, new Date]
      ),
      knex.raw(
        'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
        ["apple", 50, new Date]
      ),
      knex.raw(
        'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
        ["taco", 210, new Date]
      )
    ]);
  });
};
