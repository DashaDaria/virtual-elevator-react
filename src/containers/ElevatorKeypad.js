import React, { Component } from 'react';
import '../styles/index.css';

class ElevatorKeypad extends Component {
  constructor() {
    super()
    this.requestStopOnClick   = this.requestStopOnClick.bind(this)
    this.elevatorButtonClass  = this.elevatorButtonClass.bind(this)
  }

  requestStopOnClick(event) {
    let requestedFloor = event.target.value
    this.props.addFloorToRequestedStops(Number(requestedFloor))
  }

  elevatorButtonClass(requestedFloor) {
    let { requestedStops } = this.props
    return requestedStops.includes(Number(requestedFloor)) ? 'requested' : ''
  }

  render() {
    return(
      <div className="keypad-container">
      <p>Where do you want to go?</p>

        <div className="keypad">
        {this.props.values.map(value => {
          return(
          <input type="button"
          className={ this.elevatorButtonClass(value) }
          onClick={ this.requestStopOnClick }
          key={value}
          value={value}
           />)
        })
      }
      </div>
    </div>
    )
  }
}

ElevatorKeypad.defaultProps = {
  values: [1,2,3,4,5,6,7,8,9,10]
};

export default ElevatorKeypad;
