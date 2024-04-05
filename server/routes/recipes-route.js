const router = require("express").Router();
const recipesController = require("../controllers/recipes-controller");

router.route("/")
    .get(recipesController.recipesList)

module.exports = router;