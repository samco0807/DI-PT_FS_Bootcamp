import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Exercise1 from "./Exercise1/Exercise1";
import Exercise2 from "./Exercise2/Exercise2";
import Exercise3 from "./Exercise3/Exercise3";
import Exercise4 from "./Exercise4/Exercise4";
import Exercise5 from "./Exercise5/Exercise5";
import DailyChallenge from "./DC/DC";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="exercises">
        <h1>Exercises XP</h1>
        <h2>
          <li>
            {" "}
            <Link to="exercise1">Exercise1</Link>
          </li>
          <li>
            <Link to="exercise2">Exercise2</Link>
          </li>
          <li>
            <Link to="exercise3">Exercise3</Link>
          </li>
          <li>
            <Link to="exercise4">Exercise4</Link>
          </li>
          <li>
            <Link to="exercise5">Exercise5</Link>
          </li>
          
          <li>
            <Link to="dc">Daily Challenge</Link>
          </li>
        </h2>

        <Routes>
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
          <Route path="/exercise3" element={<Exercise3 />} />
          <Route path="/exercise4" element={<Exercise4 />} />
          <Route path="/exercise5" element={<Exercise5 />} />
          
          <Route path="/dc" element={<DailyChallenge />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;