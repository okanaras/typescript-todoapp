import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "../types/Types";

const initialState: TodoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      // disaridan gelen degerin tipi TodoType cunku veri -> id:25, content:'test' olacak ornek
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { createTodo } = todoSlice.actions;

export default todoSlice.reducer;
