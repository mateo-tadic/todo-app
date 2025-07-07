import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearAllTodos,
  setSearchTerm,
  setFilterStatus,
  selectFilteredTodos,
} from "../store/todoSlice";
import styles from "./TodoList.module.css";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";

const TodoList = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const todos = useSelector(selectFilteredTodos);
  const allTodos = useSelector((state: RootState) => state.todos.todos);
  const searchTerm = useSelector(
    (state: RootState) => state.todos.searchTerm || ""
  );
  const filterStatus = useSelector(
    (state: RootState) => state.todos.filterStatus || "all"
  );
  const dispatch = useDispatch();

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodoText.trim()) {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText("");
    }
  };

  const handleToggleTodo = (todoId: number) => {
    dispatch(toggleTodo(todoId));
  };

  const handleDeleteTodo = (todoId: number) => {
    dispatch(deleteTodo(todoId));
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all todos?")) {
      dispatch(clearAllTodos());
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>

      <form onSubmit={handleAddTodo} className={styles.form}>
        <input
          type="text"
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
          placeholder="Write a new todo..."
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
          <FaPlus />
        </button>
      </form>

      {allTodos.length > 0 && (
        <div className={styles.searchFilterContainer}>
          <input
            type="text"
            id="search-todos"
            name="search-todos"
            value={searchTerm}
            onChange={(event) => dispatch(setSearchTerm(event.target.value))}
            placeholder="Search todos..."
            className={styles.searchInput}
          />
          <div className={styles.filterButtons}>
            <button
              onClick={() => dispatch(setFilterStatus("all"))}
              className={`${styles.filterButton} ${
                filterStatus === "all" ? styles.active : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => dispatch(setFilterStatus("active"))}
              className={`${styles.filterButton} ${
                filterStatus === "active" ? styles.active : ""
              }`}
            >
              Active
            </button>
            <button
              onClick={() => dispatch(setFilterStatus("completed"))}
              className={`${styles.filterButton} ${
                filterStatus === "completed" ? styles.active : ""
              }`}
            >
              Completed
            </button>
          </div>
        </div>
      )}

      <ul className={styles.list}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${styles.item} ${
              todo.completed ? styles.completed : ""
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              className={`${styles.text} ${
                todo.completed ? styles.completed : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className={styles.deleteButton}
            >
              <FaRegTrashAlt />
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className={styles.empty}>
          {allTodos.length > 0
            ? "No match found!"
            : "No todos yet. Add one above!"}
        </p>
      )}

      {todos.length > 0 && (
        <div className={styles.clearAllContainer}>
          <button onClick={handleClearAll} className={styles.clearAllButton}>
            Delete all
            <FaRegTrashAlt />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
