import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  return (
    <ul>
      <TodoItem description="Task 1" />
      <TodoItem description="Task 2" />
      <TodoItem description="Task 3" />
    </ul>
  );
}

export default TodoList;
