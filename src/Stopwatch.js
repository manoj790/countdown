import React, { Component } from 'react';
import './Stopwatch.css';
class Stopwatch extends Component {
  state = {
    status: false,
    runningTime: 0,
    seconds: 0,
    minutes: 0
  };

  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      }
      else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
        this.setState({ runningTime: Date.now() - startTime });
          if(this.state.runningTime >= 1000) {
            this.setState({ seconds: parseInt(this.state.runningTime/1000, 10)}); 
            if(this.state.seconds >= 60) {
              this.setState({ minutes: parseInt(this.state.seconds/60, 10)});
            } 
          }
        });
      }
      return { status: !state.status };
    });
  }

  handleReset = () => {
  	clearInterval(this.timer);
    this.setState({ runningTime: 0, seconds: 0, minutes: 0, status: false });
  };

  render() {
    const { status, runningTime, seconds, minutes } = this.state;
    return (
      <div className = "main">
        <h2> Stopwatch </h2>
        <p>{minutes}min : {seconds%60}sec : {runningTime%1000}ms</p>
        <div className = "button">
        <button className = "btn" onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        <button className = "btn1" onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default Stopwatch;