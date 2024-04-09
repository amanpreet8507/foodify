const router = require("express").Router();
const favRecipesController = require("../controllers/favourites-controller");

router
  .route("/")
  .get(favRecipesController.recipesList)
  .post(favRecipesController.postRecipe);

module.exports = router;
