import React, { useState, useEffect } from "react";
import "./MDPComponent.css";
import { quotes } from "./MDP-Exercise-quotes";

const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState({
    author: "",
    quotation: "",
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
        <h1>{currentQuote.quotation} </h1>
        <h2>{currentQuote.author} </h2>
        <button onClick={showRandomQuote}>Change quote</button>
      </div>
    </div>
  );
};

export default Quote;
