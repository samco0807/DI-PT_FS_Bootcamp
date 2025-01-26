import React from "react";
import ErrorBoundary from "./Ex1-Components/ErrorBoundary.js";
import BuggyCounter from "./Ex1-Components/BuggyCounter.js";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
};

export default App;
