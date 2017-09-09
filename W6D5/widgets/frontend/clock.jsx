import React from 'react';

class Clock extends React.Component {
  constructor(){
    super();

    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick(){
    const time = new Date();
    this.setState({ time });
  }

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    // this.intervalId = 0;
  }

  render() {
    // this.state.time = this.state.time.bind(this);
    const {time} = this.state;
    return (
      <div className="clock">
        <h1>Clock</h1>
        <div className="date">
          <label>Time:</label>
          <span id='time'>{time.toTimeString()}</span>
        </div>

        <div className="date">
          <label>Date:</label>
          <span id='date'>{time.toDateString()}</span>
        </div>

      </div>
    );

  }

}






export default Clock;
