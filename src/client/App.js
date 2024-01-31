import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import MealList from "./components/MealList";

function App() {
  return (
    <Router>
      <h1>Meal Sharing App</h1>
     <MealList/>
    </Router>
  );
}

export default App;
