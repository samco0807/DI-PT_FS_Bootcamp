import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter === 5 && prevState.counter !== 5) {
      throw new Error("I crashed");
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Add One</button>
      </div>
    );
  }
}

export default BuggyCounter;