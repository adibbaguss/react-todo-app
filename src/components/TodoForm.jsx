import React, { useState } from 'react';

// Menerima function addTodo sebagai props
const TodoForm = ({ addTodo }) => {
  // Mendefinisikan state "title"
  const [title, setTitle] = useState('');
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Mendefinisikan function handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle(''); // Reset title-nya
  };

  // Mendefinisikan function "handleChangeTitle"
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  // Memeriksa apakah function "handleChangeTitle" berfungsi
  console.log(title);

  return (
    <div style={styles.container}>
      <form
        // Memanggil function addTodo ketika form dikirimkan
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          // Menambahkan event handler "onChange"
          onChange={(event) => {
            handleChangeTitle(event);
          }}
          value={title} // Atur nilai dari input sesuai dengan state "title"
        />
        <button
          style={{
            ...styles.button,
            opacity: isButtonHovered ? 1 : 0.5,
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '30px',
    minWidth: '220px',
    maxWidth: '400px',
    fontSize: '16px',
    padding: '0 16px',
    border: '0.5px solid #000',
  },
  button: {
    height: '33px',
    border: '0.5px solid #000',
    backgroundColor: '#00FF00',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'opacity 0.3s', // Menambahkan transisi untuk perubahan opasitas yang halus
  },
};

export default TodoForm;
