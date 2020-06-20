import React, { useState } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

function App() {
  const [items, setItems] = useState([]);

  function todoEntered(description) {
    setItems((items) => [...items, { id: getNextId(), description }]);
  }

  function getNextId() {
    const maxId = Math.max(...items.map((item) => item.id));
    return maxId ? maxId + 1 : 1;
  }

  return (
    <div>
      <NewTodo onTodoEntered={todoEntered} />
      <TodoList items={items} />
    </div>
  );
}

export default App;
