import React from 'react';
import TodoItem from './TodoItem'; // Lakukan import

// menerima function toggleCompletd sebagai sebuah prop
const Todos = ({ todos, toggleCompleted }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            // teruskan function toggleCompleted ke component TodoItem
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
};

export default Todos;
