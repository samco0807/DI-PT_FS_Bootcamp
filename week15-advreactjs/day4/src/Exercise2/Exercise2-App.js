import React, { useRef } from "react";

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const counterRef = useRef(null);

  const handleInputChange = () => {
    const currentLength = inputRef.current.value.length;
    counterRef.current.textContent = `Character ${currentLength}`;

    // Update the character count based on textLength
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        id="textarea"
        rows={4}
        cols={50}
        onChange={handleInputChange}
        placeholder="Type something..."
      ></textarea>
      <p ref={counterRef}>Characters Count: 0 </p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
};

export default App;
