import React, { Component } from "react";

// EXERCISE2: EVENT
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
  }

  ClickMe = () => {
    alert("I was clicked");
  };

  HandleKeyDown = (e) => {
    (<label>Press enter the key</label>)(e.key === "Enter");
    alert("The Enter key was pressed, your imput is: React");
  };

  toggleState = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.ClickMe}>Click Me</button>
        <input onKeyDown={this.HandleKeyDown}></input>
        <button onClick={this.toggleState}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default Events;
