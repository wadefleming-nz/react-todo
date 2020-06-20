import React, { useState } from 'react';

function NewTodo(props) {
  const [description, setDescription] = useState('');

  function descriptionChanged(e) {
    setDescription(e.target.value);
  }

  function addClicked() {
    if (description.length > 0) {
      props.onTodoEntered(description);
      setDescription('');
    }
  }

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={descriptionChanged}
      ></input>
      <button onClick={addClicked}>Add</button>
    </div>
  );
}

export default NewTodo;
