import React, { useEffect, useState } from "react";

const Color = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [color]);
  
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <header>My FavoriteColor is {color}</header>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Color;
