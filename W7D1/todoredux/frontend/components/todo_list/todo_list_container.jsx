import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import {allTodos, allErrors} from '../../reducers/selectors';
import {createTodo, removeTodo, fetchTodos, updateTodo, deleteTodo} from '../../actions/todo_actions';
import {receiveErrors} from '../../actions/error_actions';

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
    errors: allErrors(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (todo) => dispatch(createTodo(todo)),
    fetchTodos: (todos) => dispatch(fetchTodos()),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
  };
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoContainer;
