import React, { useState } from 'react';

// Menerima function addTodo sebagai props
const TodoForm = ({ addTodo }) => {
  // mendefinisikan state "tittle"
  const [title, setTitle] = useState('');

  // mendefinisikan function handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle(''); //reset title-nya
  };

  //   mendefinisikan function "handleChangeTitle"
  const handelChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  //   memeriksa pakah function "handleChangeTitle" berfungsi
  console.log(title);
  return (
    <div style={styles.container}>
      <form
        //   memanggil function addTodo ketika form dikirimkan
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          // menambhakan event handler "onChange"
          onChange={(event) => {
            handelChangeTitle(event);
          }}
          value={title} // Atur nilai dari input sesuai dengan state  "title"
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
  },
  button: {
    height: '72px',
    fontSize: '16px',
  },
};

export default TodoForm;
