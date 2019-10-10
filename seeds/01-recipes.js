exports.seed = function (knex) {
  return knex('recipes').insert([
    { name: 'PB & J' }
  ]);
};
