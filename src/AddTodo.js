import React, { useState } from 'react';

function AddTodo(props) {
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim()) {
      props.addTodo(text.trim());
      setText('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={event => setText(event.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;