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

//GET /api/recipes/:id/ingredients/:id
router.get('/:id/ingredients/:id', (req, res) => {
    Recipes.findIngredients(req.params.id)
        .then(ingredient => {
            if (ingredient) {
                Recipes.findIngredientsById(req.params.id)
                    .then(ingredientId => {
                        res.status(200).json(ingredientId);
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving recipes' });
        });
});

//GET /api/recipes/:id/steps/:id
router.get('/:id/steps/:id', (req, res) => {
    Recipes.findSteps(req.params.id)
        .then(step => {
            if (step) {
                Recipes.findStepsById(req.params.id)
                    .then(stepId => {
                        res.status(200).json(stepId);
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving recipes' });
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

//POST /api/recipes/:id/ingredients
router.post('/:id/ingredients', (req, res) => {
    Recipes.findIngredients(req.params.id)
        .then(recipe => {
            if (recipe) {
                Recipes.insertIngredient(req.body, req.params.id)
                    .then(ingredient => {
                        res.status(201).json(ingredient);
                    })
            }
        })
        .then(recipes => {
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem creating ingredient' });
        });
});

//POST /api/recipes/:id/steps
router.post('/:id/steps', (req, res) => {
    Recipes.findSteps(req.params.id)
        .then(recipe => {
            if (recipe) {
                Recipes.insertStep(req.body, req.params.id)
                    .then(step => {
                        res.status(201).json(step);
                    })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem creating step' });
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


//PUT /api/recipes/:id/ingredients/:id
router.put('/:id/ingredients/:id', (req, res) => {
    Recipes.findIngredients(req.params.id)
        .then(ingredient => {
            if (ingredient) {
                Recipes.updateIngredient(req.params.id, req.body)
                    .then(newIngredient => {
                        res.status(201).json(newIngredient);
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving recipes' });
        });
});

//PUT /api/recipes/:id/steps/:id
router.put('/:id/steps/:id', (req, res) => {
    Recipes.findSteps(req.params.id)
        .then(ingredient => {
            if (ingredient) {
                Recipes.updateStep(req.params.id, req.body)
                    .then(newStep => {
                        res.status(201).json(newStep);
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving recipes' });
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

//DELETE /api/recipes/:id/ingredients/:id
router.delete('/:id/ingredients/:id', (req, res) => {
    Recipes.findIngredients(req.params.id)
        .then(ingredient => {
            if (ingredient) {
                Recipes.removeIngredient(req.params.id)
                    .then(ingredientId => {
                        res.status(201).json(ingredientId);
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving recipes' });
        });
});

//DELETE /api/recipes/:id/ingredients/:id
router.delete('/:id/steps/:id', (req, res) => {
    Recipes.findSteps(req.params.id)
        .then(step => {
            if (step) {
                Recipes.removeStep(req.params.id)
                    .then(stepId => {
                        res.status(201).json(stepId);
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving recipes' });
        });
});

module.exports = router;