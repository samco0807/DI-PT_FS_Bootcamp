import React from "react";
import { Link } from "react-router-dom";
import "./Exercise3.css";

// EXERCISE3
class Exercise3 extends React.Component {
  render() {
    return (
      <div>
        <h1>I love JSX</h1>
        <h2>This is a paragraph</h2>
        <Link to="/">This is a link</Link>
        <form>
          This is a form
          <input></input>
          <button type="submit">Submit</button>
        </form>
        <h2>This is an image</h2>
        <img
          style={{ width: "50%" }}
          src="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"
          alt="Car"
        />

        <ul>
          <li>Coffee</li>
          <li>Ice Tea</li>
          <li>Coca-Cola</li>
        </ul>
      </div>
    );
  }
}

export default Exercise3;
