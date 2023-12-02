const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
    try {
        const results = await knex.raw('SELECT id,title FROM meal ORDER BY id;')
    
        res.json(results[0]);
      } catch (error) {
        console.error(error);
        throw error;
      }
});

module.exports = router