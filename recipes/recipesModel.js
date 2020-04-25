const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findByNewest,
    findSteps,
    findIngredients,
    insert,
    update,
    remove
};

function find() {
    return db('recipes');
}

function findById(id) {
    return db('recipes').where({ id }).first();
}

function findByNewest() {
    return db('recipes').orderBy('created_at');
}

function insert(recipe) {
    return db('recipes')
        .insert(recipe)
        .then(ids => {
            return findById(ids[0]);
        });
}

function update(id, changes) {
    return db('recipes')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('recipes')
        .where('id', id)
        .del();
}

function findSteps() {
    return db('steps as s')
        .join('recipes as r', 'r.id', 's.recipe_id')
        .select('s.recipe_id', 's.id', 's.step_number as step', 's.step_instruction as instruction')
}

function findIngredients() {
    return db('ingredients as i')
        .join('recipes as r', 'r.id', 'i.recipe_id')
        .select('i.recipe_id', 'i.id', 'i.ingredient_name as ingredient', 'i.ingredient_amount as amount')
}

function insertStep(step) {
    return db('steps')
        .insert(step)
        .then(ids => {
            return findById(ids[0]);
        });
}

function insertIngredient(ingredient) {
    return db('ingredients')
        .insert(ingredient)
        .then(ids => {
            return findById(ids[0]);
        });
}
