// features/TodoSlice.js

import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodos = () => {
  try {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
  } catch (error) {
    console.error("Error loading todos from localStorage:", error);
    return [];
  }
};

const initialState = {
  todos: loadTodos(),
};

const saveTodosToLocalStorage = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos to localStorage:", error);
  }
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
      saveTodosToLocalStorage(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodosToLocalStorage(state.todos);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;

      const updatedTodo = state.todos.find((todo) => todo.id === id);

      if (updatedTodo) {
        updatedTodo.text = text;
        saveTodosToLocalStorage(state.todos);
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
