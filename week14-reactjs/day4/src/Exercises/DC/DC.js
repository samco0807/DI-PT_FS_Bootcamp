import React from "react";
import FormComponent from "./DC-Component/DC-component.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let inputs = e.target.getElementsByTagName("input");
    for (const input of inputs) {
      console.log(input.value);
    }
  };

  render() {
    return (
      <div className="box">
        <FormComponent handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;