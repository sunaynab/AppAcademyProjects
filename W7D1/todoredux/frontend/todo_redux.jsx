import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { receiveTodos, receiveTodo, removeTodo, fetchTodos } from './actions/todo_actions';
import Root from './components/root';
import allTodos from './reducers/selectors';
import {thunk} from './middleware/thunk';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  window.removeTodo = removeTodo;
  window.fetchTodos = fetchTodos;
  window.thunk = thunk;

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('content')
  );
});
