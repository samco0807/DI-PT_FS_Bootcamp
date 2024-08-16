import React from "react";
import Car from "./Exercice1-Components/Exercise1-CarComponent";

// EXERCISE1
const carInfo = { name: "Ford", model: "Mustang" };

const displayBrand = () => {
  return (
    <div>
      <h1>Car information</h1>
      <Car model={carInfo.model} />
    </div>
  );
};

export default displayBrand