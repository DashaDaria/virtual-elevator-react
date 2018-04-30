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
      requestedStops: [],
      doorOpen: false
    }
    this.addFloorToRequestedStops       = this.addFloorToRequestedStops.bind(this)
    this.goToRequestedFloor             = this.goToRequestedFloor.bind(this)
    this.stopAtFloor                    = this.stopAtFloor.bind(this)
  }

  addFloorToRequestedStops(floorNumber){
    let { currentFloor, requestedStops } = this.state
    if(floorNumber !== currentFloor){
      requestedStops.push(floorNumber)
    }
  }

  goToRequestedFloor(){
    let { doorOpen, requestedStops, currentFloor } = this.state
      if (currentFloor > requestedStops[0]) {
        this.setState({ currentFloor: currentFloor - 1 })
      } else if (currentFloor < requestedStops[0]) {
        this.setState({ currentFloor: currentFloor + 1 })
      } else if (currentFloor !== 1) {
        this.addFloorToRequestedStops(1)
      }
  }

  stopAtFloor(){
    let { requestedStops, currentFloor } = this.state
    requestedStops.splice(requestedStops.indexOf(currentFloor), 1)
    this.setState({ requestedStops })
  }

  componentDidMount(){
    this.floorTravelTimer = setInterval(() => this.goToRequestedFloor(), 500)
  }

  componentWillUnmount() {
    clearInterval(this.floorTravelTimer);
  }

  render() {
    return (
      <div className="App">
      <body>
        <h1>Welcome to the Smart Virtual Elevator</h1>
        <ElevatorKeypad
        requestedStops={this.state.requestedStops}
        addFloorToRequestedStops={this.addFloorToRequestedStops}
        />
        <Elevator currentFloor={this.state.currentFloor} />
      </body>
      </div>
    );
  }
}

export default ElevatorLogic;
