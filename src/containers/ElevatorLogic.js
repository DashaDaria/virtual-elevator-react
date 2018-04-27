import React, { Component } from 'react';
import '../App.css';
import background from '../background.png';
import ElevatorKeypad from './ElevatorKeypad';
import Elevator from '../components/Elevator';

class ElevatorLogic extends Component {
  constructor(){
    super()
    this.state = {
      currentFloor: 1,
      requestedStops: []
    }

    this.addFloorToRequestedStops = this.addFloorToRequestedStops.bind(this)
  }

  addFloorToRequestedStops(floorNumber){

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
        <Elevator currentFloor={this.state.currentFloor} />
      </body>
      </div>
    );
  }
}

export default ElevatorLogic;
