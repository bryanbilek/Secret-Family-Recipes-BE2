const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findByNewest,
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
    return db('users')
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