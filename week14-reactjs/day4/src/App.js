import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Exercise1 from "./Exercises/Exercise1/Exercise1-App.js";
import Exercise23 from "./Exercises/Exercise2-3/Exercise2-3-App.js";
import DailyChallenge from "./Exercises/DC/DC.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="ex">
            <li>
              <Link to="/exercise1">Exercise 1</Link>
            </li>
            <li>
              <Link to="/exercise23">Exercise 2-3</Link>
            </li>   
            <li>
              <Link to="/DC">DC</Link>
            </li>
            <header className="App-header"></header>
          </ul>
        </nav>

        <Routes>
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise23" element={<Exercise23 />} />
          <Route path="/dc" element={<DailyChallenge />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
