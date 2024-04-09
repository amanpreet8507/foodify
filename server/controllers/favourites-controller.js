const knex = require("knex")(require("../knexfile"));

const recipesList = async (_req, res) => {
  try {
    const allRecipesList = await knex("favourites");
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

const postRecipe = async (req, res) => {
  try {
    let { name, category, image_url } = req.body;
    if (!image_url) {
      image_url = "images/noImage.png";
    }
    if (!name || !category) {
      return res.status(400).json({
        message: "Please provide all the required fields",
      });
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

module.exports = {
  recipesList,
  postRecipe,
};
