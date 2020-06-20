import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const initialItems = [
    { id: 1, description: 'Task 1' },
    { id: 2, description: 'Task 2' },
    { id: 3, description: 'Task 3' },
  ];

  const [items, setItems] = useState(initialItems);

  function addClicked() {
    setItems((items) => [
      ...items,
      { id: getNextId(), description: 'Task ' + getNextId() },
    ]);
  }

  function getNextId() {
    const maxId = Math.max(...items.map((item) => item.id));
    return maxId ? maxId + 1 : 1;
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <TodoItem key={item.id} description={item.description} />
        ))}
      </ul>
      <button onClick={addClicked}>Add</button>
    </div>
  );
}

export default TodoList;
