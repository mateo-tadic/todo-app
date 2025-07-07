import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { addTodo, toggleTodo, deleteTodo } from '../store/todoSlice';

const TodoList = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodoText.trim()) {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText('');
    }
  };

  const handleToggleTodo = (todoId: number) => {
    dispatch(toggleTodo(todoId));
  };

  const handleDeleteTodo = (todoId: number) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">
          Add Todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p>No todos yet. Add one above!</p>
      )}
    </div>
  );
};

export default TodoList; 