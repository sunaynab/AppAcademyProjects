import React from 'react';
import Clock from './frontend/clock';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

 class Root extends React.Component{
  constructor (props){
    super(props);
  }

  render() {
    return (
    <div>
      <h1>Clock</h1>
      <Clock />
      <h1>Weather</h1>
      <Weather />
      <h1>AutoComplete</h1>
      <Autocomplete />
    </div>
    );
  }
}

export default Root;
