import React from 'react';
import Clock from './frontend/clock';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';
import Tabs from './frontend/tabs';

const Names = [
  "Andres",
  "Adam",
  "Bob",
  "Cathy",
  "Dom",
  "Edward",
  "Francine",
  "Gretchen",
  "Jaime",
  "Jonas",
  "Molly",
  "Ingrid",
  "Linda",
  "Owen",
  "Quentin",
  "Ross",
  "Urkel",
  "Val",
  "Zach"
];

const panes = [
  { title: 'one', content: "Hey there!"},
  { title: 'two', content: "How are you?"},
  { title: 'three', content: "How do you like this widget?"}
];

 class Root extends React.Component{
  constructor (props){
    super(props);
  }

  render() {
    return (
    <div>
      <Clock />
      <Weather />
      <div className="bottom">
        <Autocomplete names={Names} />
        <Tabs panes={panes}/>
      </div>
    </div>
    );
  }
}

export default Root;
