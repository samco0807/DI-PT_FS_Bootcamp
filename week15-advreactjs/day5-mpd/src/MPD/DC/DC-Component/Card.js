import React from "react";

const Card = ({ name, occupation }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow">
      <img
        alt="superheroe"
        src="superhero.image"
        width="275px"
        height="200px"
      />
      <div>
        <h2>{name}</h2>
        <p>{occupation}</p>
      </div>
    </div>
  );
};

export default Card
