import React from 'react';
import uniqueId from '../../util/util';

export default class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {id:"", title:"", body:"", done: false};
    this.handleClick = this.handleClick.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = this.changeBody.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.createTodo(this.state).then(() => (this.setState({title:"", body:""})));
  }

  changeTitle(event){
    event.preventDefault();
    this.setState({title: event.target.value});
  }

  changeBody(event){
    event.preventDefault();
    this.setState({body: event.target.value});
  }

  render(){
    return (
      <form>
        <p>{this.props.errors}</p>
        <label>Title:</label>
        <input type="text" onChange={this.changeTitle} value={this.state.title}></input>
        <br></br>
        <label>Body:</label>
        <textarea onChange={this.changeBody} value={this.state.body}></textarea>
        <br></br>
        <input type="submit" onClick={this.handleClick} value="Create Todo!"></input>
      </form>
    );
  }
}
