import React from "react";
import { useParams } from "react-router-dom";
import Meal from "./Meal";
import { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";

function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState();

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/meals/${id}`);
      const data = await response.json();
      setMeal(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="meal-details">
      {/* <Meal /> */}
      This is meal details
      {meal ? (
        <div>
          <h2>{meal.title}</h2>
          <p>{meal.description}</p>
          <p>Price: {meal.price}</p>
          <p>Location: {meal.location}</p>
          {meal.totalReservations < meal.max_reservations && (
            <ReservationForm id={id} />
          )}
        </div>
      ) : (
        <p>Loading meal details...</p>
      )}
    </div>
  );
}

export default MealDetails;
