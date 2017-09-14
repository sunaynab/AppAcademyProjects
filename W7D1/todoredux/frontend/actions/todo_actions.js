import {fTodos, cTodo, uTodo, dTodo} from '../util/todo_api_util';
import {receiveErrors, clearErrors} from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const fetchTodos = () => dispatch => {
  fTodos().then((todos) => dispatch(receiveTodos(todos)));
};

export const createTodo = todo => dispatch => (
  cTodo(todo).then(
    t => {
      dispatch(receiveTodo(t));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const receiveTodos = todos => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = todo => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = todo => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

export const updateTodo = todo => dispatch => (
  uTodo(todo).then(
    t => dispatch(receiveTodo(t)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const deleteTodo = todo => dispatch => (
  dTodo(todo).then(
    t => dispatch(removeTodo(t)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);
