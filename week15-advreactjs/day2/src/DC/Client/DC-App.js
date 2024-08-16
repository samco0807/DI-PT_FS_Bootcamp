import React, { Component, useState } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  async componentDidMount() {
    const response = await fetch("/api/hello");
    const data = await response.json();
    this.state({ data });
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <header> {data}</header>
        <InputComponent />
      </div>
    );
  }
}

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          id="input"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default App;
