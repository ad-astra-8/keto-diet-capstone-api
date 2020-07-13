// methods to store database transactions
let table = 'recipes';

const RecipeService = {
	getAllRecipes(knex) {
		return knex.select('*').from(table);
	},
	insertRecipe(knex, newRecipe) {
		return knex
			.insert(newRecipe)
			.into(table)
			.returning('*')
			.then(rows => {
				return rows[0];
			});
	},
	getById(knex, id) {
		return knex
			.from(table)
			.select('*')
			.where('id', id)
			.first();
	},
	deleteRecipe(knex, id) {
		return knex(table)
			.where({ id })
			.delete();
	},
	updateRecipe(knex, id, newRecipeFields) {
		return knex(table)
			.where({ id })
			.update(newRecipeFields);
	}
};

module.exports = RecipeService;