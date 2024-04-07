const router = require("express").Router();
const recipesController = require("../controllers/recipes-controller");

router.route("/")
    .get(recipesController.recipesList)
    .post(recipesController.createRecipe)

router.route("/:id")
    .get(recipesController.recipeById)
    .put(recipesController.editRecipeById)
    .delete(recipesController.deleteRecipe)


module.exports = router;
