const knex = require("knex")(require("../knexfile"));

const recipesList = async (req, res) => {
  try {
    const allRecipesList = await knex("recipes");
    if (allRecipesList.length > 0) {
      res.status(200).json(allRecipesList);
    } else {
      res.status(400).json(`Warehouse List is unavailable: ${error}`);
    }
  } catch (error) {
    res.status(404).json({
      message: `Unable to get recipies for error: ${error}!`,
    });
  }
};

const recipesListById = async (req, res) => {
    
};

module.exports = {
  recipesList,
};
