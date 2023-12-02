const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
    try {
        const results = await knex.raw('SELECT * FROM meal ORDER BY id ASC LIMIT 1;')
        if (results.length === 0) {
            res.status(404).send("No meals found");
        } else {
            res.json(results[0]);
        }

    } catch (error) {
        console.error(error);
        throw error;
    }

});

module.exports = router;










