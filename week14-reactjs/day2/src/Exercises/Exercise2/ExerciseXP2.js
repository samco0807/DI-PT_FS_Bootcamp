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
    if (e.key === "Enter");
    const inputValue=e.target.value.trim()
    alert(`The Enter key was pressed, your input is: ${inputValue}`);
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
