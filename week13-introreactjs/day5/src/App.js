import "./App.css";
// import Posts from "./Components/Posts";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Exercise1 from "./Components/Exercise1/Exercise1.js";
import Exercise2 from "./Components/Exercise2/Exercise2.js";
import Exercise3 from "./Components/Exercise3/Exercise3.js";
import DailyChallenge from "./Components/DC/DC-Component/DCComponent.js";

const App = () => {
  // const listPosts = [
  //   { id: 1, username: "doudou", email: "doudou@gmail.com" },
  //   { id: 2, username: "poupou", email: "poupou@gmail.com" },
  //   { id: 3, username: "chouchou", email: "chouchou@gmail.com" },
  // ];
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
              <Link to="/dc">Daily Challenge</Link>
            </li>
            <header className="App-header">
              {/* <Posts posts={listPosts} /> */}
            </header>
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
