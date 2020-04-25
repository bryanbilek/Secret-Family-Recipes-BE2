const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findSteps,
    findIngredients,
    insert,
    insertStep,
    insertIngredient,
    update,
    remove
};

function find() {
    return db('recipes');
}

function findById(id) {
    return db('recipes').where({ id }).first();
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

function findSteps(recipeId) {
    return db('steps as s')
        .join('recipes as r', 'r.id', 's.recipe_id')
        .select('s.recipe_id as recipe', 'r.recipe_name as name', 's.id', 's.step_number as step', 's.step_instruction as instruction')
        .where('s.recipe_id', recipeId);
}

function findIngredients(recipeId) {
    return db('ingredients as i')
        .join('recipes as r', 'r.id', 'i.recipe_id')
        .select('i.recipe_id as recipe', 'r.recipe_name as name', 'i.id', 'i.ingredient_name as ingredient', 'i.ingredient_amount as amount')
        .where('i.recipe_id', recipeId);
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
