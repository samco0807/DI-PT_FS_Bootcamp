import React from "react";

const Exercise4 = () => {
  const inputNumber = () => {
    let numberInput = prompt("Enter a number:", "");
    if (numberInput === null || numberInput === "") {
      <h1> Please enter a number</h1>;
    }

    const number = parseFloat(numberInput);
    if (isNaN(numberInput)) return <h1>Invalid number</h1>;

    if (number > 0) {
      return <h1>the number positive</h1>;
    } else {
      return <h1>the number is negative or 0</h1>;
    }
  };

  const result = inputNumber(0);

  return <div>{result}</div>;
};

export default Exercise4;
