import TodoList from './components/TodoList';
import styles from './components/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <TodoList />
    </div>
  );
}

export default App;
