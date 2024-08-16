import React from "react";
import ErrorBoundary from "./Ex1-Components/ErrorBoundary";
import BuggyCounter from "./Ex1-Components/BuggyCounter";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
};

export default App;
