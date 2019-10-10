exports.seed = function (knex) {
  return knex('ingredients').insert([
    { recipe_id: 1, quantity: 1, name: 'test ingredient' }
  ]);
};
