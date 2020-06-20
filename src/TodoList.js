import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const items = [
    { id: 1, description: 'Task 1' },
    { id: 2, description: 'Task 2' },
    { id: 3, description: 'Task 3' },
  ];

  function addClicked() {
    console.log('clicked');
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
