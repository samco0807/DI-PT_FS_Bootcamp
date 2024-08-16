import React, { useState } from "react";
import Garage from "./Exercise1-GarageComponent";

const Car = ({ model }) => {
  const [color, setColor] = useState("red");
  const [garageSize, setGarageSize] = useState("small");
  return (
    <div>
      <h2>
        This car is {model} and the color is {color}{" "}
      </h2>
      <h2> Who lives in my {garageSize} Garage?</h2>;
      <Garage size={garageSize}></Garage>
    </div>
  );
};

export default Car;
