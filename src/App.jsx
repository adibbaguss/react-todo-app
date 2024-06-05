import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Todos from './components/Todos'; // Lalukan Import
import TodoForm from './components/TodoForm'; // import TodoForm
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);

  console.log(todos);

  // mendefinisikan toggleCompleted -->
  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // mendefinisikan function addTodo
  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      {/* menampilkan component Todo */}
      {/* Teruskan function addTodo sebagai props */}
      <TodoForm addTodo={addTodo} />
      {/* teruskan function toggleCompleted ke component Todos */}
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
};

export default App;
