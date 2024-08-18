import React, { useState } from "react";
import "./Language-component.css";

const Votes = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const handleVote = (index) => {
    //Create new array of data currently in the language array
    const updatedVotes = [...languages];
    // Update the votes in the newly created array
    updatedVotes[index].votes++;
    setLanguages(updatedVotes);
  };

  return (
    <div className="language">
      <h1>Vote for your favorite language</h1>
      <ul className="votes">
        {languages.map((language, index) => (
          <li key={index}>
            ({language.votes}) {language.name}
            <button onClick={() => handleVote(index)}>Click Here</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Votes;
