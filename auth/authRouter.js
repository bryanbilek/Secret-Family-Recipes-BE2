const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../users/usersModel');
const secrets = require('../api/secrets');

//POST to /api/auth/register
router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
    Users.add(user)
        .then(user => {
            res.status(200).json({ message: 'Registration successful' });
        })
        .catch(err => {
            console.log('ERR', err)
            res.status(500).json({ message: 'Registraition failed' });
        });
});

//POST to /api/auth/login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    Users.findBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ message: `Welcome, ${user.username}!` });
            } else {
                res.status(401).json({ message: 'Invalid username or password' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem logging in' });
        });
});

//token
function generateToken(user) {
    const payload = {
        userId: user.id,
        username: user.username
    };
    const secret = secrets.jwtSecret
    const options = {
        expiresIn: '1h'//token is good for 1 hour
    };
    return jwt.sign(payload, secret, options);
};

module.exports = router;