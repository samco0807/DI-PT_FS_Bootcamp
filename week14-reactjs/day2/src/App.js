import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Exercise1 from "./Exercises/Exercise1/ExerciseXP1.js";
import Exercise2 from "./Exercises/Exercise2/ExerciseXP2.js";
import Exercise3 from "./Exercises/Exercise3/ExerciseXP3.js";
import Exercise4 from "./Exercises/Exercise4/ExerciseXP4.js";
import DailyChallenge from "./Exercises/DC/DC-App.js";

const App = () => {
  return (
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
              <Link to="/exercise4">Exercise 4</Link>
            </li>
            <li id="ex">
              <Link to="/DC">DC</Link>
            </li>
            <header className="App-header"></header>
          </ul>
        </nav>

        <Routes>
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
          <Route path="/exercise3" element={<Exercise3 />} />
          <Route path="/exercise4" element={<Exercise4 />} />
          <Route path="/dc" element={<DailyChallenge />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
