//planning
//    /recipes/:id/ingredients
//    /recipes/:id/steps

const router = require('express').Router();
const Recipes = require('./recipesModel');

//GET /api/recipes
router.get('/', (req, res) => {
    Recipes.find()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            res.status(500).json({ message: 'Problem getting recipes' });
        });
});

//GET /api/recipes/:id
router.get('/:id', (req, res) => {
    Recipes.findById(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving recipe' });
        });
});

//POST /api/recipes
router.post('/', (req, res) => {
    Recipes.insert(req.body)
        .then(recipes => {
            res.status(201).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem creating recipe' });
        });
});

//PUT /api/recipes/:id
router.put('/:id', (req, res) => {
    Recipes.update(req.params.id, req.body)
        .then(recipe => {
            res.status(201).json(recipe);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Problem updating recipe' });
        });
});

//DELETE /api/recipes/:id
router.delete('/:id', (req, res) => {
    Recipes.remove(req.params.id)
        .then(recipe => {
            res.status(201).json(recipe);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Problem deleting recipe' });
        });
});

//GET /api/recipes/:id/ingredients
router.get('/:id/ingredients', (req, res) => {
    Recipes.findIngredients(req.params.id)
        .then(ingredients => {
            res.status(200).json(ingredients);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem getting ingredients' });
        });
});

//GET /api/recipes/:id/steps
router.get('/:id/steps', (req, res) => {
    Recipes.findSteps(req.params.id)
        .then(steps => {
            res.status(200).json(steps);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem getting steps' });
        });
});