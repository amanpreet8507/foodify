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
  try {
    let { name, image_url, category } = req.body;
    if (!name || !category) {
      return res.status(400).json({
        message: "Please provide all the required fields",
      });
    }
    if (!image_url) {
      image_url = "/images/noImage.png";
    }
    const newRecipeId = await knex("recipes").insert({
      name,
      image_url,
      category,
    });
    const newRecipe = await knex("recipes")
      .where({ id: newRecipeId[0] })
      .first();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create a new recipe: ${error}!`,
    });
  }
};

const editRecipeById = async (req, res) => {};

const deleteRecipe = async (req, res) => {};

module.exports = {
  recipesList,
  recipeById,
  createRecipe,
  editRecipeById,
  deleteRecipe,
};
