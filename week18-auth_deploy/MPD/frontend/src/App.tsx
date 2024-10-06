import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

export const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/logout" element={<LogoutPage />}></Route>
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <h1>Protected Page</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};