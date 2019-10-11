exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.text('name', 128)
                .unique()
                .notNullable();
            tbl.text('instructions', 1000)
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id');
            tbl.float('quantity')
                .notNullable();
            tbl.text('name', 128)
                .unique()
                .notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients');
};
