import React from 'react';

//  menerima function toggleCompleted sebagai sebagai sebuah prop

const TodoItem = ({ todo, toggleCompleted }) => {
  // definiskan function getTodoTitleStyle di sini
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
    </div>
  );
};

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    // menambahkan style -->
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   meneambah style checkbox -->
  checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  },
};

export default TodoItem;
