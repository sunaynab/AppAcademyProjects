import React from 'react';
import Clock from './frontend/clock';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

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
      </div>
    </div>
    );
  }
}

export default Root;
