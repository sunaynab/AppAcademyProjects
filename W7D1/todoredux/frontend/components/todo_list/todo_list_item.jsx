import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

const toggleTodo = (todo) => {
  todo.done = !todo.done;
  return todo;
};

const Item = ({todo, removeTodo, updateTodo}) => (
  <div>
    <li>{todo.title}</li>
    <button onClick={() => (updateTodo(toggleTodo(todo)))}>{todo.done ? "undo" : "done"}</button>
    <TodoDetailViewContainer todo={todo}/>
  </div>
);

export default Item;
