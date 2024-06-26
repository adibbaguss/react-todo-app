import React from 'react';
import TodoItem from './TodoItem'; // Lakukan import

// menerima function toggleCompletd sebagai sebuah prop
const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

const styles = {
  container: {
    backgrounColor: '#000000',
    width: '50%',
    margin: '0 auto',
  },
};

export default Todos;
