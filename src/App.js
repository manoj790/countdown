import React, { Component } from 'react';
import './App.css';
import Countdowntimer from './countdowntimer';
import Stopwatch from './Stopwatch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'August 15, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newdeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>  
        <Countdowntimer 
          deadline = {this.state.deadline} />

        <div>
          <input 
            placeholder='new date' 
            onChange={event => this.setState({newdeadline: event.target.value })} 
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
          <Stopwatch />
      </div>
    );
  }
}

export default App;
