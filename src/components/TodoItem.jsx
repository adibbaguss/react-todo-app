// import hook "useContext" dari React dan "TOdoContext" dar app.jsx
import React, { useContext } from 'react';
import { TodoContext } from '../App';
//  menerima function toggleCompleted sebagai sebagai sebuah prop

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);
  //   definiskan function getTodoTitleStyle di sini
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' };
    } else {
      return { textDecoration: 'none' };
    }
  };

  const toggleComplated = () => {
    console.log('toggleCompleted function is called');
  };

  return (
    <div style={styles.todoItem}>
      {/* menambah checkbox */}
      <input
        type="checkbox"
        style={styles.checkbox}
        //   menjalankan function toggleCompleted ketidak checkbox di-klik
        //  Memberikan id dari todo sebagai argument
        onChange={() => toggleCompleted(todo.id)}
      />
      {/* panggil function getTOdoTitleStyle */}
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      {/* menambbah button */}
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
};

// memperbarui css
const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  checkbox: {
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default TodoItem;
