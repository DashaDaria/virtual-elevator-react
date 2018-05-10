import React, { Component } from 'react';
import './Elevator.css';

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
        <table className="building">
          <tbody className="building-floor">
            {this.props.floors.map(floor => {
            return(
              <tr>
                <td key={floor} className={ this.moveElevatorClass(floor) }>{floor}</td>
              </tr>
              )
              })
             }
          </tbody>
        </table>
      </div>
     )
    }
  }

Elevator.defaultProps = {
  floors: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  };

export default Elevator;
