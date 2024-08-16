import React, { useRef } from "react";
import "./App.css";

const CharacterCounter=()=> {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    // Update the character count based on textLength
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."></textarea>
      <p>Character Count: {/* Display character count here */}</p>
    </div>
  );
}

const App=()=> {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;