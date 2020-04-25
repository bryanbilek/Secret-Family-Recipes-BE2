exports.up = function (knex) {
    return knex.schema
        //each field required; username has to be unique
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('first_name').notNullable();
            tbl.string('last_name').notNullable();
            tbl.string('email').notNullable();
            tbl.string('username', 12).notNullable().unique();//max 12 characters
            tbl.string('password', 12).notNullable();//max 12 characters
        })

        //each field except image required; user_id refers to users tbl
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.integer('user_id').references('id').inTable('users').unsigned().notNullable().onUpdate('CASCADE').onDelete('CASCADE');
            tbl.string('image');//need to figure out the image data type
            tbl.string('recipe_name').notNullable();
            tbl.text('description', 255).notNullable();//keeping description to a max of 255 chars
            tbl.string('prep_time').notNullable();
            tbl.string('cook_time').notNullable();
        })

        //each field required; recipe_id refers to recipes tbl
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id').references('id').inTable('recipes').unsigned().notNullable().onUpdate('CASCADE').onDelete('CASCADE');
            tbl.string('ingredient_name').notNullable();
            tbl.string('ingredient_amount').notNullable();
        })

        //each field required; recipe_id refers to recipes tbl
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.integer('recipe_id').references('id').inTable('recipes').unsigned().notNullable().onUpdate('CASCADE').onDelete('CASCADE');
            tbl.integer('step_number').notNullable().unsigned();
            tbl.text('step_instruction', 255).notNullable();//keeping the instructions to a max of 255 chars
        })

        //because many recipes use an ingredient & that same ingredient can be used in many recipes, there is a many-to-many table linking the id from each table
        .createTable('recipes_ingredients', tbl => {
            tbl.primary(['recipe_id', 'ingredient_id']);
            tbl.integer('recipe_id').references('id').inTable('recipes').unsigned().notNullable().onUpdate('CASCADE').onDelete('CASCADE');
            tbl.integer('ingredient_id').references('id').inTable('ingredients').unsigned().notNullable().onUpdate('CASCADE').onDelete('CASCADE');
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('users');
};
