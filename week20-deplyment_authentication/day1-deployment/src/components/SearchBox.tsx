// App/src/component/searchbox.tsx
import React, { useState, useEffect } from "react";
import "./Searbox.css"; // Import your CSS file for styling

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
  initialValue?: string;
}

const SearchBox = ({ onSearch, initialValue = "" }: SearchBoxProps) => {
  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onSearch(newValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(inputValue.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
