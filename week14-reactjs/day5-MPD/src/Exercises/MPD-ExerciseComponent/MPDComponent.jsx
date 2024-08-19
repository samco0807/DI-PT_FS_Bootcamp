import { useState, useEffect } from "react";
import "./MDPComponent.css";
import quotes from "./MDP-Exercise-quotes.jsx";

const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState({
    author: "",
    quote: "",
  });

  useEffect(() => {
    showRandomQuote();
  }, []);

  const showRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <div className="quote-box">
        <h1 className="quote">"{currentQuote.quote}"</h1>
        <p className="author">-{currentQuote.author}-</p>
        <button onClick={showRandomQuote}>New quote</button>
      </div>
    </div>
  );
};

export default Quote;
