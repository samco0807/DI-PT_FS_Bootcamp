import React from "react";
import UserFavoriteAnimals from "./Exercise2-Component/Ex2-Component-UserFavoriteAnimal";

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

// EXERCISE2:
const Exercise2 = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Animals Exercise
          <UserFavoriteAnimals animals={user.favAnimals} />
        </div>
      </header>
    </div>
  );
};

export default Exercise2;
