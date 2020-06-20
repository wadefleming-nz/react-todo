import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem description={item.description} />
      ))}
    </ul>
  );
}

export default TodoList;
