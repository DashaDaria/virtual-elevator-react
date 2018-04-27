import React, { Component } from 'react';
import '../App.css';
import background from '../background.png';
import ElevatorKeypad from './ElevatorKeypad';

class ElevatorLogic extends Component {
  constructor(){
    super()
    this.state = {
      currentFloor: 1,
      requestedStops: []
    }
  }

  addFloorToRequestedStops(){

  }

  render() {
    return (
      <div className="App">
      <body>
        <h1>Welcome to the Smart Virtual Elevator</h1>
        <ElevatorKeypad
        currentFloor={this.state.currentFloor}
        requestedStops={this.state.requestedStops}
        addFloorToRequestedStops={this.state.addFloorToRequestedStops}
        />
      </body>
      </div>
    );
  }
}

export default ElevatorLogic;
