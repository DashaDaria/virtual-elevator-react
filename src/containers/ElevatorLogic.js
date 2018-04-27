import React, { Component } from 'react';
import '../App.css';
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

        <header className="App-header">
          <h1 className="App-title">Welcome to the Smart Virtual Elevator</h1>
        </header>

        <ElevatorKeypad currentFloor={this.state.currentFloor}/>
      </div>
    );
  }
}

export default ElevatorLogic;
