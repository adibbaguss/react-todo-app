import React, { useContext, useState } from 'react';
import { TodoContext } from '../App';

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const getTodoTitleStyle = () => {
    return {
      textDecoration: todo.completed ? 'line-through' : 'none',
    };
  };

  return (
    <div
      style={{
        ...styles.todoItem,
        backgroundColor: isHovered ? '#dddddd' : '#fff',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input type="checkbox" style={styles.checkbox} checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button
        style={{
          ...styles.button,
          opacity: isButtonHovered ? 1 : 0.2,
        }}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        onClick={() => deleteTodo(todo.id)}
      >
        x
      </button>
    </div>
  );
};

// Memperbarui CSS
const styles = {
  todoItem: {
    border: '1px solid #101010',
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
    margin: '10px auto',
    maxWidth: '500px',
    cursor: 'pointer',
  },
  checkbox: {
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '2rem',
    width: '2rem',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s', // Menambahkan transisi untuk efek yang halus
  },
};

export default TodoItem;
