const express = require("express");
const router = express.Router();
const knex = require("../database");

//GET - Returns all meals

router.get("/", async (request, response) => {
  try {
    const meals = await knex("meal").select("*");
    response.json(meals);
  } catch (error) {
    response.status(500).json({ error: "Error retrieving meals" });
  }
});

//POST - Add a new meal to the database ??

router.post("/", async (request, response) => {
  const newMeal = request.body;
  newMeal.created_date = new Date();
  try {

    await knex("meal").insert(newMeal);
    response.status(201).json("Meal created successfully")
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Error creating meal" });
  }

});

//GET Return a reservation by id

router.get("/:id", async (request, response) => {

  try {
    const { id } = request.params;
    const meal = await knex("meal").select("*").where({ id }).first();
    if (meal) {
      response.json(meal);
    } else {
      response.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    response.status(500).json({ error: "Error retrieving meal" });
  }
});

//PUT - Update a reservation by id ??

router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const updateMeal = request.body;

    const results = await knex("meal")
      .update(updateMeal).where({ id })

    if (results) {
      return response.json({message: "Meal updated successfully"});
    } else {
      return response.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "Error updating meal"});
  }
})

//DELETE - Delete a reservation by id 

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const deleteMeal = await knex("meal").select("*").where({ id }).del();
    if (deleteMeal) {
      response.json({message: "Meal deleted successfully"});
    } else {
      response.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    response.status(500).json({ error: "Error deleting meal"});
  }
})




module.exports = router;
