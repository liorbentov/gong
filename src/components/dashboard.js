import React from 'react';

import RecentSales from './recent-sales';
import TopPayingCustomers from './top-paying-customers';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="top-row">
                    <div className="stats-block">
                        <RecentSales />
                    </div>
                    <div className="stats-block">
                        <TopPayingCustomers />
                    </div>
                </div>
            </div>
        );
    }
}
