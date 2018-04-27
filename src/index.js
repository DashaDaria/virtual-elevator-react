import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ElevatorLogic from './containers/ElevatorLogic';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ElevatorLogic />,
  document.getElementById('root'));

registerServiceWorker();
