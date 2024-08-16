import React, { Component } from "react";

class UserFavoriteAnimals extends Component {
  render() {
    const { animals } = this.props; // Destructuring props to get the favAnimals array
    return (
      <div>
        <h2>User's Favorite Animals:</h2>
        <ul>
          {animals.map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;