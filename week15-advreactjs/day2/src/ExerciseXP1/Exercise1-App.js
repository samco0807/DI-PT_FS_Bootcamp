import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./ExerciseXP1-Component/Home.js";
import Shop from "./ExerciseXP1-Component/Shop.js";
import Profile from "./ExerciseXP1-Component/Profile.js";
import ErrorBoundary from "./ExerciseXP1-Component/Exercise1-Component.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
};

export default App;
