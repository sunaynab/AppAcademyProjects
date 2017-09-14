import React from 'react';
import Item from './todo_list_item';
import TodoForm from './todo_form';


class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    const listItems = this.props.todos.map((todo, idx) => {
      return (
        <Item key={idx} todo={todo} updateTodo={this.props.updateTodo}/>
      );
    });
    console.log(this.props.todos);
    return(
      <div>
        <TodoForm createTodo = {this.props.createTodo} errors={this.props.errors}/>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;
