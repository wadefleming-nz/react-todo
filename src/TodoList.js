import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} description={item.description} />
      ))}
    </ul>
  );
}

export default TodoList;
