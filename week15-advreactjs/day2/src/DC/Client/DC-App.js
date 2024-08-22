import React, { Component, useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/hello");
        setData(response);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <header>{data}</header>

      <form>
    <input type="text">Bonjour
    </input>
    <button type="submit">Submit</button>
    </form>
    </div>
  );


  // const InputComponent = () => {
  //   const [inputValue, setInputValue] = useState("");

  //   const handleInputChange = (e) => {
  //     setInputValue(e.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(inputValue);
  //   };
};
//   <div>
//     <header> {data}</header>
//     <InputComponent />
//   </div>
//   <div>
//   <form method="POST" onSubmit={handleSubmit}>
//     <input
//       type="text"
//       name="input"
//       id="input"
//       value={inputValue}
//       onChange={handleInputChange}
//     ></input>
//     <button type="submit"></button>
//   </form>
// </div>)

export default App;
