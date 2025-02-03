import React, { useState } from "react";

const Exercise4 = () => {
  const [inputNumber, setInputNumber] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputNumber.trim() === "" || isNaN(Number(inputNumber))) {
      setResult("You did not enter a number. Please enter a number");
      return;
    }

    const number = parseFloat(inputNumber);

    if (number > 0) {
      setResult("the number positive");
    } else {
      setResult("the number is negative or 0");
    }
    setInputNumber("");
  };

  return (
    <div>
      <h1>Exercise 4</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Enter a number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <button type="submit">Check Number</button>
        <h3>{result}</h3>
      </form>
    </div>
  );
};

export default Exercise4;
