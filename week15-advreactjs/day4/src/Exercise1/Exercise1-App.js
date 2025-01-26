import React, {useContext} from "react";
import ThemeProvider, {ThemeContext} from "./Exercise1-Component/Exercise1-Component.js";
import ThemeToggle from "./Exercise1-Component/ThemeToggle.js";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Switcher Example</h1>
        <ThemeToggle />
        <Content/>
        {/* Other components here */}
      </div>
    </ThemeProvider>
  );
};

const Content = () => {
  const { theme } = useContext(ThemeContext);
  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "5px",
  };

  return <div style={style}>This is a {theme} themed content!</div>;
};

export default App;
