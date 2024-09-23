import React from "react";
import { ThemeContext } from "./Exercise1-Component";

const ThemeToggle = () => {
  const { toggleTheme, theme } = React.useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {" "}
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeToggle;
