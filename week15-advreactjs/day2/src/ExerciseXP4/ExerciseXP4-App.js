import React from "react";
const axios = require('axios');

const App = () => {
  const fetchData = async () => {
    const response = await fetch(
      "https://webhook.site/08fe749f-2dff-48a9-baaf-bc6932ac1935"
    );
    const data = await response.json();
    JSON.parse(data)
    return (
      <div>
        <header>{key} </header>
        <header>{email} </header>
        <header>{Name} </header>
        <header>{lastName} </header>
        <header>{age} </header>
        
        <button onClick={data} method="POST"></button>
      </div>
    );
  };
};

export default App;
