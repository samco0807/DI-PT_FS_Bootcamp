import "./App.css";
import React from "react";
import { ThemeProvider } from "./App-component.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Exercise1 from "./Exercise1/Exercise1-App.js";
import Exercise2 from "./Exercise2/Exercise2-App.js";
import Exercise3 from "./Exercise3/Exercise3-App.js";
import DailyChallenge from "./DC/DC-App.js";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li id="ex">
                <Link to="/exercise1">Exercise 1</Link>
              </li>
              <li id="ex">
                <Link to="/exercise2">Exercise 2</Link>
              </li>
              <li id="ex">
                <Link to="/exercise3">Exercise 3</Link>
              </li>
              <li id="ex">
                <Link to="/dc">DC</Link>
              </li>
              <header className="App-header"></header>
            </ul>
          </nav>

          <Routes>
            <Route path="/exercise1" element={<Exercise1 />} />
            <Route path="/exercise2" element={<Exercise2 />} />
            <Route path="/exercise3" element={<Exercise3 />} />
            <Route path="/dc" element={<DailyChallenge />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
