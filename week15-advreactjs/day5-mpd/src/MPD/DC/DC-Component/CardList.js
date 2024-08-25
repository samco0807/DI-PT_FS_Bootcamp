import React from "react";
import Card from "./Card";

const CardList = ({ superheroes }) => {
  const cardComponent = superheroes.map((superheroe, i) => {
    return (
      <Card
        key={i}
        id={superheroe.id}
        name={superheroe.name}
        email={superheroe.occupation}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
