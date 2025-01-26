import React, { useReducer, useState, useRef } from "react";

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "EDIT_TODO":
      // Edit a todo to the state
      return [
        state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      ];
    case "FILTER_TODO":
      // Filter a new todo to the state
      return { todos: state.todos.filter((todo) => !todo.completed) };
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const inputRef = useRef(todoText);

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText, completed: false });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditTodo = (id) => {
    if (todoText) {
      dispatch({ type: "EDIT_TODO", id });
    }
  };
  const filterTodo = (id) => {
    if (todoText.trim()) {
      dispatch({ type: "FILTER_TODO", id });
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={filterTodo}>filter Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
