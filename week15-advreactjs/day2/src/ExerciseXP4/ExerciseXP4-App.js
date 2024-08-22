import React from "react";
import axios from "axios"

const App = () => {
  const fetchData = async () => {
    const response = await axios.post(
      "https://webhook.site/08fe749f-2dff-48a9-baaf-bc6932ac1935"
    );
    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };
    const result = await response.json();
    JSON.parse(data);

return (
      <div>
        <header>{data.key1} </header>
        <header>{data.email} </header>
        <header>{data.name} </header>
        <header>{data.lastname} </header>
        <header>{data.age} </header>
      </div>
    );
  };
  <button onClick={fetchData()} method="POST">
    Press me to post some data
  </button>;
  console.log(fetchData);
  fetchData();
};

export default App;
