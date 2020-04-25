const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//routers go here
const usersRouter = require('../users/usersRouter');
const authRouter = require('../auth/authRouter');
const restricted = require('../middleware/restricted');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome To The Secret Family Recipes API!' });
});

//routers.use go here
server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);

module.exports = server;