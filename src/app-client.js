import React from 'react';
import ReactDOM from 'react-dom';

import AppRoutes from './components/app-routes';
import Config from './config';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
