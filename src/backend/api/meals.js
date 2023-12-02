const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});
//Respond with all meals in the future (relative to the when datetime)

//router.get("/future-meals", async (req, res) => {
  //try {
    //const results = await knex.raw('select title from meal where meal_when > NOW();')

    //res.json(results[0]);
  //} catch (error) {
    //console.error(error);
    //throw error;
  //}
//});

module.exports = router
