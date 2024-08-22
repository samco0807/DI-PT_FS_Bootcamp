import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Exercise1 from "./ExerciseXP1/Exercise1-App.js";
import Exercise2 from "./ExerciseXP2/ExerciseXP2-App.js";
import Exercise3 from "./ExerciseXP3/ExerciseXP3-App.js";
import Exercise4 from "./ExerciseXP4/ExerciseXP4-App.js";
import DailyChallenge from "./DC/Client/DC-App.js";

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
              <Link to="/dc">DC</Link>
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
