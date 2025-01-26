import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Home from "./ExerciseXP1-Component/Home.js";
import Shop from "./ExerciseXP1-Component/Shop.js";
import Profile from "./ExerciseXP1-Component/Profile.js";
import ErrorBoundary from "./ExerciseXP1-Component/Exercise1-Component.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Exercise1App = () => {
  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/exercise1/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/exercise1/profile">
            Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/exercise1/shop">
            Shop
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <Profile />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <Shop />
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  );
};

export default Exercise1App;
