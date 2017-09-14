import React from 'react';

const TodoDetailView = ({deleteTodo, todo}) => {
  return (
    <button onClick={() => (deleteTodo(todo))}>Remove Todo</button>
  );
};

export default TodoDetailView;
