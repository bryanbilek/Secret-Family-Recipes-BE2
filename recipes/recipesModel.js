const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findIngredients,
    findIngredientsById,
    findSteps,
    findStepsById,
    insert,
    insertStep,
    insertIngredient,
    update,
    updateIngredient,
    updateStep,
    remove,
    removeIngredient,
    removeStep
};

function find() {
    return db('recipes');
}

function findById(id) {
    return db('recipes').where({ id }).first();
}

function findIngredients(recipeId) {
    return db('ingredients as i')
        .join('recipes as r', 'r.id', 'i.recipe_id')
        .select('i.recipe_id as recipe', 'r.recipe_name as name', 'i.id', 'i.ingredient_name as ingredient', 'i.ingredient_amount as amount')
        .where('i.recipe_id', recipeId);
}

function findIngredientsById(id) {
    return db('ingredients')
        .where({ id })
        .first();
}

function findSteps(recipeId) {
    return db('steps as s')
        .join('recipes as r', 'r.id', 's.recipe_id')
        .select('s.recipe_id as recipe', 'r.recipe_name as name', 's.id', 's.step_number as step', 's.step_instruction as instruction')
        .where('s.recipe_id', recipeId);
}

function findStepsById(id) {
    return db('steps')
        .where({ id })
        .first();
}

function insert(recipe) {
    return db('recipes')
        .insert(recipe)
        .then(ids => {
            return findById(ids[0]);
        });
}

function insertStep(step, recipe_id) {
    return db('steps').insert({ ...step, recipe_id });
}

function insertIngredient(ingredient, recipe_id) {
    return db('ingredients').insert({ ...ingredient, recipe_id });
}

function update(id, changes) {
    return db('recipes')
        .where({ id })
        .update(changes);
}

function updateIngredient(id, changes) {
    return db('ingredients')
        .where('id', id)
        .update(changes);
}

function updateStep(id, changes) {
    return db('steps')
        .where('id', id)
        .update(changes);
}

function remove(id) {
    return db('recipes')
        .where('id', id)
        .del();
}

function removeIngredient(id) {
    return db('ingredients')
        .where('id', id)
        .del();
}

function removeStep(id) {
    return db('steps')
        .where('id', id)
        .del();
}