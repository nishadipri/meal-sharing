import React from "react";
import { Outlet, Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1>Delicious Meals</h1>
      <h3>Explore a Variety of Mouthwatering Dishes</h3>

      <div className="routeComponentsWrapper">
        <Outlet />
      </div>
      <footer>
        <p>&copy; 2023. All rights reserved.</p>
      </footer>

      {/* Add Footer, Menu, Logo, etc. */}
    </div>
  );
}

export default HomePage;
