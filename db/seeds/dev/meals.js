exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meals RESTART IDENTITY')
  .then(function() {
    return Promise.all([
      knex.raw(
        'INSERT INTO meals (name, created_at) VALUES (?, ?)',
        ["breakfast", new Date]
      ),
      knex.raw(
        'INSERT INTO meals (name, created_at) VALUES (?, ?)',
        ["lunch", new Date]
      ),
      knex.raw(
        'INSERT INTO meals (name, created_at) VALUES (?, ?)',
        ["snack", new Date]
      ),
      knex.raw(
        'INSERT INTO meals (name, created_at) VALUES (?, ?)',
        ["dinner", new Date]
      )
    ]);
  });
};
