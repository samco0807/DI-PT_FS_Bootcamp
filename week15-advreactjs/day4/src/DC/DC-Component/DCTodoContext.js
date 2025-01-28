import React, { createContext, useReducer } from "react";

const TodoContext = createContext();

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      // Edit a todo to the state
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "FILTER_TODO":
      // Filter a new todo to the state
      return action.filterCompleted
        ? state.filter((todo) => todo.completed)
        : state;
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}{" "}
    </TodoContext.Provider>
  );
};

export default TodoContext;
