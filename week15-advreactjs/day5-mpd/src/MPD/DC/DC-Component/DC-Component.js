import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

const DailyChallengeComponent = () => {
  const [superheroes, setSuperHeroes] = useState([]);
  const [error, setError] = useState(null);

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
const shuffleCards = (second) => { 
const shuffleArray=[]
superheroes(shuffleArray)
 }

  // Superheroes in list
  return (
    <div>
      <h1>Superheroe memory game</h1>
      <h2>Get points by clicking on the image</h2>
      <ul>
        {superheroes.map((superhero) => (
          <li key={superhero.id}>
            {superhero.name} -{" "}
            {<img src={superhero.image} alt="superheroe"></img>} -{" "}
            {superhero.occupation}
          </li>
        ))}
      </ul>

      <div className="cards">
        <ul>
          {superheroes.map((superhero) => (
            <Card style={{ width: "18rem" }} onClick={shuffleCards}>
              <Card.Img variant="top" src={superhero.image} />
              <Card.Body key={superhero.id}>
                <Card.Title>{superhero.name} </Card.Title>
                <Card.Text>{superhero.occupation}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DailyChallengeComponent;
