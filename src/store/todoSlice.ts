import { createSlice, createSelector, type PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  searchTerm: string;
  filterStatus: 'all' | 'active' | 'completed';
}

const initialState: TodosState = {
  todos: [],
  searchTerm: '',
  filterStatus: 'all',
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
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setFilterStatus: (state, action: PayloadAction<'all' | 'active' | 'completed'>) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearAllTodos, setSearchTerm, setFilterStatus } = todosSlice.actions;

const selectTodos = (state: { todos: TodosState }) => state.todos.todos;
const selectSearchTerm = (state: { todos: TodosState }) => state.todos.searchTerm;
const selectFilterStatus = (state: { todos: TodosState }) => state.todos.filterStatus;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectSearchTerm, selectFilterStatus],
  (todos, searchTerm, filterStatus) => {
    let filtered = todos;

    if (searchTerm && searchTerm.trim()) {
      filtered = filtered.filter(todo =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus && filterStatus !== 'all') {
      filtered = filtered.filter(todo =>
        filterStatus === 'completed' ? todo.completed : !todo.completed
      );
    }

    return filtered;
  }
);

export default todosSlice.reducer; 