import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

console.log(routes);

export default class AppRoutes extends React.Component {
    render() {
        return (
            <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
                { routes }
            </Router>
        );
    }
}