const router = require('express').Router();
const Users = require('./usersModel');

//GET /api/users
router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json({ message: 'Problem getting users' });
        });
});

//GET /api/users/:id
router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving user' });
        });
});

//GET /api/users/:id/recipes
router.get('/:id/recipes', (req, res) => {
    Users.findUserRecipes(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving recipes' });
        });
});

//POST /api/users
router.post('/', (req, res) => {
    Users.insert(req.body)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem creating user' });
        });
});

//PUT /api/users/:id
router.put('/:id', (req, res) => {
    Users.update(req.params.id, req.body)
        .then(user => {
            res.status(201).json(user);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Problem updating user' });
        });
});

//DELETE /api/users/:id
router.delete('/:id', (req, res) => {
    Users.remove(req.params.id)
        .then(user => {
            res.status(201).json(user);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Problem deleting user' });
        });
});

module.exports = router;