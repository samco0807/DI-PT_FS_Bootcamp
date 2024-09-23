import { ADD_TODO, REMOVE_TODO } from "../redux/actions";

const initialState = { todos: [] };

export const todoReducer = (state = initialState, { action }) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, ...action.payload] };
    case REMOVE_TODO:
        return { ...state, todos: state.todos.filter(todo.id!==action.payload)};

    default:
      return state;
  }
};
