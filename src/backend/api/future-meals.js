const express = require("express");
const router = express.Router();
const knex = require("../database");


//Respond with all meals in the future (relative to the when datetime)
router.get("/", async (req, res) => {
    try {
      const results = await knex.raw('select title,meal_when as dueDate from meal where meal_when > NOW();')
  
      res.json(results[0]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
  
  module.exports = router;