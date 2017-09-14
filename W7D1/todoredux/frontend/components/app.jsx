import React from 'react';
import TodoContainer from './todo_list/todo_list_container';

export default class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <TodoContainer />
      </div>
    );
  }
}
