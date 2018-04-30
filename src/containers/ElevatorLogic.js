import React, { Component } from 'react';
import '../App.css';
import ElevatorKeypad from './ElevatorKeypad';
import Elevator from '../components/Elevator';


class App extends Component {
  constructor(){
    super()
    this.state = {
      requestedStops: [],
      currentFloor: 1,
      doorOpen: false
    }
    this.addFloorToRequestedStops = this.addFloorToRequestedStops.bind(this)
    this.stopAtFloor              = this.stopAtFloor.bind(this)
    this.goToNextFloor            = this.goToNextFloor.bind(this)
  }

  goToNextFloor() {
    let { doorOpen, requestedStops, currentFloor } = this.state
    if (!doorOpen) {
      let nextStop = requestedStops[0]
      if (!!nextStop && currentFloor > nextStop) {
        this.setState({ currentFloor: currentFloor - 1 })
      } else if (!!nextStop && currentFloor < nextStop) {
        this.setState({ currentFloor: currentFloor + 1 })
      } else if (!nextStop && currentFloor !== 1) {
        this.addFloorToRequestedStops(1)
      } else if (!!nextStop && currentFloor === nextStop) {
        this.stopAtFloor()
      }
    }
  }

  stopAtFloor() {
    let { requestedStops, currentFloor } = this.state
    clearInterval(this.floorTravelTimer);
    this.setState({ doorOpen: true })
    this.floorStopTimer = setInterval(() => {
      clearInterval(this.floorStopTimer);
      this.floorTravelTimer = setInterval(() => this.goToNextFloor(), 500)
      this.setState({ doorOpen: false })
    }, 3000)
    requestedStops.splice(requestedStops.indexOf(currentFloor), 1)
    this.setState({ requestedStops })
  }

  addFloorToRequestedStops(requestedFloor) {
    let { currentFloor, requestedStops } = this.state
    let nextStop = requestedStops[0]
    if (!nextStop) {
      requestedStops.push(requestedFloor)
    } else if (!requestedStops.includes(requestedFloor)) {
      if (nextStop < currentFloor) {
        // we're going down
        let nextStops  = requestedStops.filter( stop => { return stop < currentFloor } )
        let laterStops = requestedStops.filter( stop => { return stop > currentFloor } )
        if (requestedFloor < currentFloor) {
          nextStops.push(requestedFloor)
        } else {
          laterStops.push(requestedFloor)
        }
        nextStops.sort((a, b) => { return b - a })
        laterStops.sort((a, b) => { return a - b })
        requestedStops = nextStops.concat(laterStops)
        console.log('down - ', 'cf:', currentFloor, 'rf:', requestedStops.join(', '))
      } else {
        // we're going up
        let nextStops  = requestedStops.filter( stop => { return stop > currentFloor } )
        let laterStops = requestedStops.filter( stop => { return stop < currentFloor } )
        if (requestedFloor > currentFloor) {
          nextStops.push(requestedFloor)
        } else {
          laterStops.push(requestedFloor)
        }
        nextStops.sort((a, b) => { return a - b })
        laterStops.sort((a, b) => { return b - a })
        requestedStops = nextStops.concat(laterStops)
        console.log('up - ', 'cf:', currentFloor, 'rf:', requestedStops.join(', '))
      }

    }
    this.setState({ requestedStops })
  }

  componentDidMount() {
    this.floorTravelTimer = setInterval(() => this.goToNextFloor(), 500)
  }

  componentWillUnmount() {
    clearInterval(this.floorTravelTimer);
    clearInterval(this.floorStopTimer)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Virtual Elevator</h1>
        </header>
        <div>Current Floor is { this.state.currentFloor }</div>
        <div>Requested Stops: { this.state.requestedStops.join(', ') }</div>
        <ElevatorKeypad
          requestedStops={this.state.requestedStops}
          addFloorToRequestedStops={this.addFloorToRequestedStops}
        />
        <Elevator currentFloor={this.state.currentFloor} />
      </div>
    )
  }
}

export default App;
