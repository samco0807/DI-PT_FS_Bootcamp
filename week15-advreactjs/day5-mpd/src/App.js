import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Exercise from "./MPD/Exercise/Exercise.js";
import DailyChallenge from "./MPD/DC/DailyChallenge.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li id="ex">
              <Link to="/exercise">Exercise</Link>
            </li>
            <li id="ex">
              <Link to="/dc">DC</Link>
            </li>
            <header className="App-header"></header>
          </ul>
        </nav>

        <Routes>
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/dc" element={<DailyChallenge />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
