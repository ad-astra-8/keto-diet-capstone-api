const path = require('path');
const express = require('express');
const xss = require('xss');
const logger = require('../logger');

const RecipeService = require('./recipe-service');
const { getRecipeValidationError } = require('./recipe-validator');

const recipeRouter = express.Router();
const jsonParser = express.json();

const serializeRecipe = recipe => ({
	id: recipe.id,
	title: xss(recipe.title),
	image: recipe.image,
	source: xss(recipe.source),
	user_id: recipe.user_id
});

recipeRouter
	.route('/')
	.get((req, res, next) => {
		const knexInstance = req.app.get('db');
		RecipeService.getAllRecipes(knexInstance)
			.then(recipes => {
				res.json(recipes.map(serializeRecipe));
			})
			.catch(next);
	})
	.post(jsonParser, (req, res, next) => {
		const { user_id, title, source, image } = req.body;
		const newRecipe = { user_id, title, source, image  };

		const knexInstance = req.app.get('db');

		// const error = getRecipeValidationError(newRecipe);
		// if (error) {
		// 	logger.error({
		// 		message: `POST Validation Error`,
		// 		request: `${req.originalUrl}`,
		// 		method: `${req.method}`,
		// 		ip: `${req.ip}`
		// 	});
		// 	return res.status(400).send(error);
		// }

		RecipeService.insertRecipe(knexInstance, newRecipe)
			.then(recipe => {
				logger.info({
					message: `Recipe with id ${recipe.id} created.`,
					request: `${req.originalUrl}`,
					method: `${req.method}`,
					ip: `${req.ip}`
				});
				res
					.status(201)
					.location(path.posix.join(req.originalUrl, `/${recipe.id}`))
					.json(serializeRecipe(recipe));
			})
			.catch(next);
	});

recipeRouter
	.route('/:id')
	.all((req, res, next) => {
		const { id } = req.params;
		const knexInstance = req.app.get('db');
		RecipeService.getById(knexInstance, id)
			.then(recipe => {
				if (!recipe) {
					logger.error({
						message: `Recipe with id ${id} not found.`,
						request: `${req.originalUrl}`,
						method: `${req.method}`,
						ip: `${req.ip}`
					});
					return res.status(404).json({
						error: { message: `Recipe Not Found` }
					});
				}
				res.recipe = recipe;
				next();
			})
			.catch(next);
	})
	.get((req, res) => {
		res.json(serializeRecipe(res.recipe));
	})
	.delete((req, res, next) => {
		const { id } = req.params;
		const knexInstance = req.app.get('db');
		RecipeService.deleteRecipe(knexInstance, id)
			.then(numRowsAffected => {
				logger.info({
					message: `Recipe with id ${id} deleted.`,
					request: `${req.originalUrl}`,
					method: `${req.method}`,
					ip: `${req.ip}`
				});
				// need to send back message instead of .end()
				res.status(204).json({
					message: true
				});
			})
			.catch(next);
	})
	.patch(jsonParser, (req, res, next) => {
		const knexInstance = req.app.get('db');
		const { id } = req.params;
		const { name, id_folder, content } = req.body;
		const recipeToUpdate = { name, id_folder, content };

		const numberOfValues = Object.values(recipeToUpdate).filter(Boolean).length;
		if (numberOfValues === 0) {
			logger.error({
				message: `Invalid update without required fields`,
				request: `${req.originalUrl}`,
				method: `${req.method}`,
				ip: `${req.ip}`
			});
			return res.status(400).json({
				error: {
					message: `Request body must contain either 'name', 'id_folder', or 'content'`
				}
			});
		}

		const error = getRecipeValidationError(recipeToUpdate);
		if (error) {
			logger.error({
				message: `PATCH Validation Error`,
				request: `${req.originalUrl}`,
				method: `${req.method}`,
				ip: `${req.ip}`
			});
			return res.status(400).send(error);
		}

		RecipeService.updateRecipe(knexInstance, id, recipeToUpdate)
			.then(numRowsAffected => {
				res.status(204).end();
			})
			.catch(next);
	});

module.exports = recipeRouter;