import React from "react";
import TodoList from "./DC-Component/DCComponent.js";
import { TodoProvider } from "./DC-Component/DCTodoContext.js";

const DailyChallengeApp = () => {
  return (
    <div className="App">
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default DailyChallengeApp;
