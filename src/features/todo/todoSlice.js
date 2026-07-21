/*  
redux
Store → Data kahan rakha hai. [where is the data stored]
Reducer → Data kaise badlega. [how data will change]
Dispatch → Reducer ko call karta hai. [calls the reducer]
useSelector → Store se data nikalta hai. [fetch the data from the store]
*/

import { createSlice, nanoid } from "@reduxjs/toolkit";

const savedTodos = JSON.parse(localStorage.getItem("todos"));

const initialState = {
  todos:
    savedTodos && savedTodos.length > 0
      ? savedTodos
      : [
          {
            id: 1,
            text: "learn redux",
          },
        ],
  editingTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      //   const todo = state.todos.find((todo) => todo.id === action.payload.id);
      //   if (todo) {
      //     todo.text = action.payload.text;
      //   }

      state.todos.find((todo) => todo.id === action.payload.id).text =
        action.payload.text;
    },
    isEditingTodo: (state, action) => {
      state.editingTodo = action.payload;
    },
    clearEditingTodo: (state) => {
      state.editingTodo = null;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  isEditingTodo,
  clearEditingTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
