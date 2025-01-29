import React from "react";

const age: number = 31;
const name: string = "Samuel";
console.log(age, name);

const Exercise2 = () => {
  return (
    <div>
      <h1>
        {age}, {name}
      </h1>
    </div>
  );
};

export default Exercise2;
