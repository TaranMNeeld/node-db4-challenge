exports.seed = function (knex) {
  return knex('recipes').insert([
    {
      name: 'PB & J',
      instructions: 'put peanut butter on first slice of bread, put jam on the second slice of bread, then clap the two slices together'
    },
    {
      name: 'Cereal',
      instructions: 'pour cereal into the cast-iron pan, then pour milk over cereal in a circular motion'
    },
    {
      name: 'Pasta',
      instructions: 'blend up your scraps, then place them into a bowl of wet popcorn'
    }
  ]);
};
