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
    this.addFloorToRequestedStops       = this.addFloorToRequestedStops.bind(this)
    this.removeFloorFromRequestedStops  = this.removeFloorFromRequestedStops.bind(this)
    this.goToRequestedFloor             = this.goToRequestedFloor.bind(this)
  }

  addFloorToRequestedStops(floorNumber){
    //
  }

  removeFloorFromRequestedStops(floorNumber){
    if (floorNumber === requestedStops[0]){
      let { requestedStops } = this.state
      requestedStops.filter(requestedStops.splice(requestedStop[0], 1))
    }
    return requestedStops
  }

  goToRequestedFloor(){

  }

  componentDidMount(){
    this.floorTravelTimer = setInterval(() => {
      this.setState({ requestedStops })
    }, 500)
  }


  render() {
    return (
      <div className="App">
      <body>
        <h1>Welcome to the Smart Virtual Elevator</h1>
        <ElevatorKeypad
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
