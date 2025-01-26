import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./DC-Component.css";

const DailyChallengeComponent = () => {
  const [superheroes, setSuperHeroes] = useState([]);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const [topscore, setTopscore] = useState(0);

  // Function to retrieve data
  const fetchSuperHeroes = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/devtlv/SuperheroesChallenge-JSBOOTCAMP-Week8Day5/main/superheroes.json"
      );
      setSuperHeroes(response.data.superheroes); // On suppose que l'array d'objets se trouve sous la clé "Superheroes"
    } catch (err) {
      setError(err.message);
    }
  };

  // useEffect to trigger to get the data when component mount
  useEffect(() => {
    fetchSuperHeroes();
  }, []);

  // If an error, a message display
  if (error) {
    return <div>Erreur: {error}</div>;
  }

  // If data not downloaded yet
  if (superheroes.length === 0) {
    return <div>Downloading...</div>;
  }

  // shuffle cards function
  const shuffleCards = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleClick = (clickedCardId) => {
    const suffledCards=shuffleCards([...superheroes])
  }
  const updateScore = () => {
    setScore(score + 1);
  };

  // Superheroes in list
  return (
    <div>
      <h2>Superheroe memory game</h2>
      <h2>Get points by clicking on the image</h2>
      <p>score:{score}</p>
      <p>Top score:{topscore}</p>

      <div className="cards">
        {superheroes.map((superhero) => (
          <Card onClick={shuffleCards} key={superhero.id}>
            <Card.Img
              variant="top"
              src={superhero.image}
              alt={superhero.name}
            />
            <Card.Body>
              <Card.Title>{superhero.name} </Card.Title>
              <Card.Text>{superhero.occupation}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DailyChallengeComponent;
