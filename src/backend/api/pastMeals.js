const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
    try {
        const results = await knex.raw('select title,meal_when as dueDate from meal where meal_when < NOW();')
    
        res.json(results[0]);
      } catch (error) {
        console.error(error);
        throw error;
      }
    
});

module.exports = router;