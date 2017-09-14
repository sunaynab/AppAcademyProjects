import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (todo) => dispatch(deleteTodo(todo))
  };
};

const TodoDetailViewContainer = connect(
  null,
  mapDispatchToProps
)(TodoDetailView);

export default TodoDetailViewContainer;
