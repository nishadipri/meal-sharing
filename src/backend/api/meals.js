const express = require("express");
const router = express.Router();
const knex = require("../database");

//router.get("/", async (request, response) => {
//try {
// knex syntax for selecting things. Look up the documentation for knex for further info
// const titles = await knex("meals").select("title");
//response.json(titles);
//} catch (error) {
//throw error;
//}
//});

router.get("/", async (request, response) => {
  try {
    const mealWithDescription = await knex("meal")
      .leftJoin("Review", "meal.id", "Review.meal_id")
      .select(
        "meal.id",
        "meal.title",
        "meal.location",
        "meal.price",
        "Review.description"
      );

    response.json(mealWithDescription);
  } catch (error) {
    console.log("error", error);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const queryResults = await knex.raw(`
    SELECT 
      meal.id, 
      meal.title, 
      meal.location, 
      meal.price,
      meal.max_reservations,
      count(Reservation.id) as totalReservations
    FROM meal
    LEFT JOIN \`Reservation\` ON meal.id = \`Reservation\`.meal_id
    WHERE meal.id = ${id}
    GROUP BY meal.id
    `);

    const meal = queryResults[0][0];

    if (!meal) {
      return response.status(404).json({ error: "Meal not found" });
    }

    return response.status(200).json(meal);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
