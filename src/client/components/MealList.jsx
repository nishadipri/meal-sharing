import './MealList.css';
import React, { useState, useEffect } from 'react';
import Meal from './Meal';
import {Container, Card, Row, Col} from 'react-bootstrap';

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
      <Container fluid>
        <Row>
        {meals.map((meal, index) => (
          <Col>
          <Card style={{ width: '18rem' }}>
          <Card.Body style={{backgroundColor: "#BDC1D1"}}>
            <div key={index}>
             <Meal meal={meal} />
           </div> 
           </Card.Body>
           </Card>
           </Col>
        ))}
        </Row>
      </Container>
    )
}

export default MealList;