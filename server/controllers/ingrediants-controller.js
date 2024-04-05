const { response } = require("express");

const knex = require("knex")(require("../knexfile"));

const allIngrediantsList = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({
      message: `Unable to get ingrediants list. The error is: ${error}!`,
    });
  }
};

module.exports = {
  allIngrediantsList,
};
