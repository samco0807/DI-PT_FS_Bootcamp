import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Exercise1 from "./Exercises/Exercise1/Exercise1.js";
import Exercise2 from "./Exercises/Exercise2/Exercise2.js";
import Exercise3 from "./Exercises/Exercise3/Exercise3.js";
import DailyChallenge from "./src/Exercises/DC/DC-App.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/exercise1">Exercise 1</Link>
            </li>
            <li>
              <Link to="/exercise2">Exercise 2</Link>
            </li>
            <li>
              <Link to="/exercise3">Exercise 3</Link>
            </li>
            <li>
              <Link to="/DC">DC</Link>
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
  );
};

export default App;
