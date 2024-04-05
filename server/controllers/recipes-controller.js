const { response } = require("express");

const knex = require("knex")(require("../knexfile"));

const recipesList = async(req, res) => {
    try{

    }catch (error) {
    res.status(404).json({
      message: `Unable to get recipies for error: ${error}!`,
    });
  }
}

module.exports = {
    recipesList
}