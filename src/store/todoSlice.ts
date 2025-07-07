import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      const todoToToggle = state.todos.find((todo) => todo.id === todoId);
      if (todoToToggle) todoToToggle.completed = !todoToToggle.completed;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
    clearAllTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearAllTodos } = todosSlice.actions;
export default todosSlice.reducer; 