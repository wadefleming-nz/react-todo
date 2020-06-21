import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <TodoItem key={item.id} description={item.description} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
