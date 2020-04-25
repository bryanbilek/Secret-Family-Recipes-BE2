const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findUserRecipes,
    insert,
    update,
    remove,
};

function find() {
    return db('users');
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

function insert(user) {
    return db('users')
        .insert(user)
        .then(ids => {
            return getById(ids[0]);
        });
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('users')
        .where('id', id)
        .del();
}

function findUserRecipes() {
    return db('recipes as r')
        .join('users as u', 'u.id', 'r.user_id')
        .select('r.user_id as user', 'r.id', 'r.recipe_name as name', 'r.description', 'r.prep_time', 'r.cook_time')
}