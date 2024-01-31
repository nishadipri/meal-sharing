const express = require("express");
const router = express.Router();
const knex = require("../database");

//router.get("/", async (request, response) => {
  //try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
   // const titles = await knex("meal").select("title");
    //response.json(titles);
 // } catch (error) {
  //  throw error;
  //}
//});

router.get("/", async (request, response) => {
  try{
const mealWithDescription = await knex  ("meal")
.leftJoin('Review', 'meal.id', 'Review.meal_id')
.select("meal.title","meal.price","Review.description")

response.json(mealWithDescription);


  }catch(error){
    console.log("error", error)

  }
});


module.exports = router;
