import React, { useState } from "react";

const Votes = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const handleVote = (languageName) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((language) =>
        language.name === languageName
          ? { name: language.name, vote: language.votes + 1 }
          : language
      )
    );
  };

  return (
    <div className="language">
      <h1>Vote your Language!</h1>
      <span>{languages.name}</span>
      <span>{languages.votes}</span>
      <button onClick={() => handleVote(languages.name)}>Click Here</button>
    </div>
  );
};

export default Votes;