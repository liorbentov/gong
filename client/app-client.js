import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    return <div>Hello world</div>
};

window.onload = () => {
  ReactDOM.render(<App/>, document.getElementById('main'));
};
