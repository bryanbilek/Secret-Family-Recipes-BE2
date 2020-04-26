const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

//routers go here
const usersRouter = require('../users/usersRouter');
const authRouter = require('../auth/authRouter');
const recipesRouter = require('../recipes/recipesRouter');
const ingredientsRouter = require('../ingredients/ingredientsRouter');
const restricted = require('../middleware/restricted');


server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome To The Secret Family Recipes API!' });
});

//routers.use go here
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/recipes', recipesRouter);
// server.use('/api/ingredients', ingredientsRouter);

module.exports = server;