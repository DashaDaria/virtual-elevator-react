import React, { Component } from 'react';
import '../index.css';

class Elevator extends Component {
  constructor(){
    super()
    this.moveElevatorClass = this.moveElevatorClass.bind(this)
  }

  moveElevatorClass(currentFloor) {
    return (this.props.currentFloor === currentFloor) ? 'visited' : ''
  }

  render(){
    return(
      <div className="building-container">
        <div className="building">
          <table>
          <tbody>
            <tr>
              <td className={ this.moveElevatorClass(10) }>10</td>
            </tr>
            <tr>
              <td className={ this.moveElevatorClass(9) }>9</td>
            </tr>
            <tr>
              <td className={ this.moveElevatorClass(8) }>8</td>
            </tr>
            <tr>
              <td className={ this.moveElevatorClass(7) }>7</td>
            </tr>
            <tr>
              <td className={ this.moveElevatorClass(6) }>6</td>
            </tr>
            <tr>
              <td className={ this.moveElevatorClass(5) }>5</td>
            </tr>
            <tr>
              <td className={ this.moveElevatorClass(4) }>4</td>
            </tr>
            <tr>
              <td className={ this.moveElevatorClass(3) }>3</td>
            </tr>
            <tr>
              <td className={ this.moveElevatorClass(2) }>2</td>
            </tr>
            <tr>
              <td className={ this.moveElevatorClass(1) }>1</td>
            </tr>
            </tbody>
          </table>
          </div>
      </div>
    )
  }
}

export default Elevator;
