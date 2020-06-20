import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const items = [
    { description: 'Task 1' },
    { description: 'Task 2' },
    { description: 'Task 3' },
  ];

  return (
    <body>
      <TodoList items={items} />
    </body>
  );
}

export default App;
