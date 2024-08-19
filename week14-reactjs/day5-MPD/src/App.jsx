import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Exercise from "./Exercises/MDP-ExerciseApp.jsx";
import DailyChallenge from "./Exercises/MPD-DCApp.jsx";

const App = () => {
  return (
    <Router>
      <header className="App-header">
        <div className="App">
          <nav>
            <ul className="ex">
              <li>
                <Link to="/exercise">Exercise</Link>
              </li>
              <li>
                <Link to="/dc">DC</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/dc" element={<DailyChallenge />} />
          </Routes>
        </div>
      </header>
    </Router>
  );
};

export default App;
