exports.seed = function (knex) {
  return knex('ingredients').insert([
    { recipe_id: 1, quantity: 2, name: 'slice of bread' },
    { recipe_id: 1, quantity: 1, name: 'a jar of peanut butter' },
    { recipe_id: 1, quantity: 1, name: 'a jar of jam' },
    { recipe_id: 2, quantity: 2, name: 'your favorite cereal' },
    { recipe_id: 2, quantity: 1, name: 'pint of milk' },
    { recipe_id: 3, quantity: 1, name: 'scraps' },
    { recipe_id: 3, quantity: 1, name: 'popcorn' },
    { recipe_id: 3, quantity: 1, name: 'pint of water' }
  ]);
};
