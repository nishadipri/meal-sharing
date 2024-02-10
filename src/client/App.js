import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import MealList from "./components/MealList";
import Home from "./components/Home";
import MealDetails from "./components/MealDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MealList />} />
          <Route exact path="/meals" element={<MealList />} />
          <Route path="/meals/:id" element={<MealDetails />} />
        </Route>
      </Routes>

      {/*<MealList/>*/}
    </BrowserRouter>
  );
}

export default App;
