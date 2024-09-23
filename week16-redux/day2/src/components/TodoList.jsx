import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../redux/actions"

export const TodoList = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}></button>
        </li>
      ))}
    </ul>
  )
}