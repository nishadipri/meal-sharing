import "./MealList.css";
import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function MealList() {
  const [meals, setMeals] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/meals");
      const data = await response.json();
      setMeals(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const RenderMeals = () => {
    let mealsToRender;

    if (location.pathname === "/") {
      mealsToRender = meals.slice(0, 3);
    } else if (location.pathname.indexOf("/meals") !== -1) {
      mealsToRender = meals;
    }

    return mealsToRender.map((meal) => {
      const linkToBookingPage = `/meals/${meal.id}`;

      return (
        <Col key={meal.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Body style={{ backgroundColor: "#BDC1D1" }}>
              <div>
                <Meal meal={meal} />
                <Link to={linkToBookingPage}>Make a booking</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  return (
    <Container fluid>
      <Row>
        <RenderMeals />
      </Row>

      <Link to="/meals">View All</Link>
    </Container>
  );
}

export default MealList;
