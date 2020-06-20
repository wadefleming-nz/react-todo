import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const initialItems = [
    { id: 1, description: 'Task 1' },
    { id: 2, description: 'Task 2' },
    { id: 3, description: 'Task 3' },
  ];

  const [state, setState] = useState({
    items: initialItems,
    newDescription: '',
  });

  function addClicked() {
    setState((state) => ({
      ...state,
      items: [
        ...state.items,
        { id: getNextId(), description: state.newDescription },
      ],
      newDescription: '',
    }));
  }

  function getNextId() {
    const maxId = Math.max(...state.items.map((item) => item.id));
    return maxId ? maxId + 1 : 1;
  }

  function descriptionChanged(e) {
    const newDescription = e.target.value;
    setState((state) => ({ ...state, newDescription }));
  }

  return (
    <div>
      <input
        type="text"
        value={state.newDescription}
        onChange={descriptionChanged}
      ></input>
      <button onClick={addClicked}>Add</button>
      <ul>
        {state.items.map((item) => (
          <TodoItem key={item.id} description={item.description} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
