
import React, { useState, useEffect } from 'react';

function MealList () {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchMeal();
      }, []);
    
      const fetchMeal = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/meals');
          const data = await response.json();
          setMeals(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
        
      };

      
    



    return(
       <div>
        <ul>
        {meals.map((meal, index) => (
          <li key={index}>
            <h3>{meal.title}</h3>
            <p>{meal.description}</p>
            
            <p>Price: ${meal.price}</p>
          </li>
        ))}

        </ul>

       </div>
    )
}

export default MealList;