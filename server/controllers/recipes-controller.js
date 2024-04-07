const knex = require("knex")(require("../knexfile"));

const recipesList = async (_req, res) => {
  try {
    const allRecipesList = await knex("recipes");
    if (allRecipesList.length > 0) {
      res.status(200).json(allRecipesList);
    } else {
      res.status(400).json(`Recipe is unavailable: ${error}`);
    }
  } catch (error) {
    res.status(404).json({
      message: `Unable to get recipies for error: ${error}!`,
    });
  }
};

const recipeById = async (req, res) => {
  const { id } = req.params;
  try {
    const selectedRecipe = await knex("recipes").where({ id }).first();

    if (selectedRecipe) {
      res.status(200).json(selectedRecipe);
    } else {
      res.status(404).json("Recipe not found.");
    }
  } catch (error) {
    res
      .status(400)
      .json(
        `Error in retrieving the selected recipe information: ${error.message}`
      );
  }
};

const createRecipe = async (req, res) => {

}

const editRecipeById = async(req, res) => {

}

const deleteRecipe = async(req, res) => {

}

module.exports = {
  recipesList,
  recipeById,
  createRecipe,
  editRecipeById,
  deleteRecipe
};
