import React from "react";

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }
  static subtract(a: number, b: number): number {
    return a - b;
  }
  constructor(a: number, b: number) {
    console.log("Addition:", Calculator.add(a, b));
    console.log("Substract:", Calculator.subtract(a, b));
  }
}
const a = 5;
const b = 6;
const resultadd = Calculator.add(a, b);
const resultsubtract = Calculator.subtract(a, b);

const Exercise4 = () => {
  return (
    <div>
      <h1>Exercise 4</h1>
      <h1>
        a={a}
        b={b}{" "}
      </h1>
      <h1>
        Addition:{resultadd} Substract: {resultsubtract}
      </h1>
    </div>
  );
};

export default Exercise4;
