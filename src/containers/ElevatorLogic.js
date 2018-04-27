import React, { Component } from 'react';
import '../App.css';
import background from '../background.png';
import ElevatorKeypad from '../components/ElevatorKeypad';

class ElevatorLogic extends Component {
  constructor(){
    super()
    this.state = {
      currentFloor: 1
    }
  }

  render() {
    return (
      <div className="App">
      <body>
        <h1>Welcome to the Smart Virtual Elevator</h1>
        <ElevatorKeypad currentFloor={this.state.currentFloor}/>
      </body>
      </div>
    );
  }
}

export default ElevatorLogic;
