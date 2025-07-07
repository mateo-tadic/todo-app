import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { addTodo, toggleTodo, deleteTodo } from "../store/todoSlice";
import styles from "./TodoList.module.css";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";

const TodoList = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const todos = useSelector((state: RootState) => state.todos.todos);
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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>

      <form onSubmit={handleAddTodo} className={styles.form}>
        <input
          type="text"
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
          placeholder="Add a new todo..."
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
          <FaPlus />
        </button>
      </form>

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
        <p className={styles.empty}>No todos yet. Add one above!</p>
      )}
    </div>
  );
};

export default TodoList;
