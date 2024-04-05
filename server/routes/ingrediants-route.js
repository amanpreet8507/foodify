const router = require("express").Router();
const ingrediantsController = require("../controllers/ingrediants-controller");

router.route("/").get(ingrediantsController.allIngrediantsList);

module.exports = router;
