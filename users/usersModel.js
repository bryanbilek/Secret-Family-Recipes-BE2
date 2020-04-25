const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
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