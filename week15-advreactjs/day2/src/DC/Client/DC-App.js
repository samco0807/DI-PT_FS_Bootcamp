import React, { useState, useEffect } from "react";
import axios from "axios";

const DCApp = () => {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");
  const API_URL_GET = "http://localhost:3000/api/hello";
  const API_URL_POST = "http://localhost:3000/api/world";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL_GET);
      console.log(response.data);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  const handleInputChange = async (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL_POST, { input: inputValue });
      console.log("Response from server", response.data);
      if (response.status===201) {
        
        setInputValue(response)
      }
    } catch (error) {
      console.error("Error posting data", error);
    }
  };
  return (
    <div>
      <div>
        <header>
          <h1>{data}</h1>{" "}
        </header>
      </div>

      <h1>Post to server</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
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

export default DCApp;
