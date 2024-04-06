const router = require("express").Router();
const recipesController = require("../controllers/recipes-controller");

router.route("/").get(recipesController.recipesList);

router.route("/:id").get(recipesController.recipeById);

module.exports = router;
