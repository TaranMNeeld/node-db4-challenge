const express = require('express');

const recipesModel = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  recipesModel.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
});

router.get('/:id', validateRecipeId, (req, res) => {
  const { id } = req.params;
  recipesModel.getRecipeById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
});

router.get('/:id/ingredients', validateRecipeId, (req, res) => {
  const { id } = req.params;

  recipesModel.getIngredients(id)
    .then(ingredients => {
      if (ingredients.length) {
        res.json(ingredients);
      } else {
        res.status(404).json({ message: 'Could not find ingredients for given recipe' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get ingredients' });
    });
});

router.get('/:id/instructions', validateRecipeId, (req, res) => {
  const { id } = req.params;
  recipesModel.getInstructions(id)
    .then(instructions => {
      if (instructions.length) {
        res.json(instructions);
      } else {
        res.status(404).json({ message: 'Could not find instructions for given recipe' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get instructions' });
    });
});

//Middleware

function validateRecipeId(req, res, next) {
  const id = req.params.id;
  recipesModel.getRecipeById(id)
    .then(recipe => {
      if (recipe[0]) {
        console.log('id validated');
        res.status(200).json(recipe);
      }
    })
    .catch(err => {
      res.status(400).json({ errorMessage: 'id is invalid' });
    })
  next();
};
module.exports = router;