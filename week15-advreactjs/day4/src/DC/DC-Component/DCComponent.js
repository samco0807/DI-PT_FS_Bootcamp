import React, { useContext, useState, useRef, useEffect } from "react";
import TodoContext from "./DCTodoContext.js";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");
  const inputRef = useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch({ type: "ADD_TODO", text: todoText, completed: false });
      setTodoText("");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [todos.length]);

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditTodo = (id) => {
    dispatch({ type: "EDIT_TODO", id });
  };

  const handleFilterTodo = (filterCompleted) => () => {
    dispatch({ type: "FILTER_TODO", filterCompleted });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a new todo"
          ref={inputRef}
        />
        <button type="submit">Add Todo</button>
      </form>

      <button onClick={handleFilterTodo(true)}>Show Completed</button>
      <button onClick={handleFilterTodo(false)}>Show All</button>
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
