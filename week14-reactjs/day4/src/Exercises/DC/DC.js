import React from "react";
import FormComponent from "./DC-Component/DC-Component.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      FormData: {},
    };
  }

  handleSubmit = (FormData) => {
    this.setState = { FormData };
    console.log(FormData);
  };

  render() {
    return (
      <div className="box">
        <FormComponent handleSubmit={this.handleSubmit} />
        {this.state.FormData.firstname && (
          <p>First Name: {this.state.FormData.firstname}</p>
        )}
        {this.state.FormData.lastname && (
          <p>Last Name: {this.state.FormData.lastname}</p>
        )}
        {this.state.FormData.age && <p>Age: {this.state.FormData.age}</p>}
        {this.state.FormData.destination && (
          <p>Destination: {this.state.FormData.destination}</p>
        )}
        {this.state.FormData.gender && (
          <p>Gender: {this.state.FormData.gender}</p>
        )}
      </div>
    );
  }
}

export default App;
