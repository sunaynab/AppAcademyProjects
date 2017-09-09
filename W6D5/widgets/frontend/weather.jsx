import React from 'react';

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {temp: "", location: ""};
  }



  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const long = pos.coords.longitude;
      const lat = pos.coords.latitude;
      var req = new XMLHttpRequest();
      req.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=c2a83d91324c9c1c6c8043fb20c0055d`, true);
      req.onload =  () => {
        let data = JSON.parse(req.responseText);
        let temp = data.main.temp;
        let location = data.name;
        temp =((temp - 273.15)*9/5)+32;
        this.setState({temp});
        this.setState({location});
      };

      req.send();
    });
  }

  render() {
    const {temp, location} = this.state;
    return (
      <div className="weather">
        <span >{Math.floor(temp)}°F</span>
        <span className= "location">{location}</span>
      </div>
    );
  }
}


// window.Weather = Weather;

export default Weather;
