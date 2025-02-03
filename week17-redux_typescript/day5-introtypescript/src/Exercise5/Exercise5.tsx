import React, { useState } from "react";

const Exercise5 = () => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  // const getDetails = () => {
  //   const details: [string, number];
  //   details = [name, age];
  //   console.log(`Hello ${name}, you are ${age}`);
  // };

  // getDetails();

  return (
    <div>
      <form>
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="age"/>
      </form>
      <h2>Hello your </h2>
    </div>
  );
};

export default Exercise5;
