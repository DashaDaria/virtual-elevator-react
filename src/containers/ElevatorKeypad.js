import React, { Component } from 'react';
import '../App.css';


class ElevatorKeypad extends Component {
  constructor() {
    super()
    this.requestStopOnClick = this.requestStopOnClick.bind(this)
    this.keypadClass        = this.keypadClass.bind(this)
  }

  requestStopOnClick(event) {
    let floorNumber = event.target.value
    this.props.addFloorToRequestedStops(floorNumber)
  }

  keypadClass(floorNumber) {
    let { requestedStops } = this.props
    return requestedStops.includes(floorNumber) ? 'requested' : ''
  }

  render(){
    return(
      <div className="keypad-container">
        <p>Choose Your Floor</p>
        <div className="keypad">
          <input type="button" className={ this.keypadClass(1) } onClick={this.requestStopOnClick} value="1" />
          <input type="button" className={ this.keypadClass(2) } onClick={this.requestStopOnClick} value="2" />
          <input type="button" className={ this.keypadClass(3) } onClick={this.requestStopOnClick} value="3" />
          <input type="button" className={ this.keypadClass(4) } onClick={this.requestStopOnClick} value="4" />
          <input type="button" className={ this.keypadClass(5) } onClick={this.requestStopOnClick} value="5" />
          <input type="button" className={ this.keypadClass(6) } onClick={this.requestStopOnClick} value="6" />
          <input type="button" className={ this.keypadClass(7) } onClick={this.requestStopOnClick} value="7" />
          <input type="button" className={ this.keypadClass(8) } onClick={this.requestStopOnClick} value="8" />
          <input type="button" className={ this.keypadClass(9) } onClick={this.requestStopOnClick} value="9" />
          <input type="button" className={ this.keypadClass(10) } onClick={this.requestStopOnClick} value="10" />
      </div>
    </div>
    )
  }
}

export default ElevatorKeypad;
