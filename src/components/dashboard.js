import React from 'react';

import RecentSales from './recent-sales';
import TopPayingCustomers from './top-paying-customers';
import TopFeatures from './top-features';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="top-row">
                    <div className="stats-block">
                        <div className="panel-header">Latest enterprise deals</div>
                        <TopPayingCustomers />
                    </div>
                    <div className="stats-block">
                        <div className="panel-header">Latest No Touch Deals </div>
                        <RecentSales />
                    </div>
                </div>
                <div className="bottom-row">
                    <div className="stats-block">
                        <div className="panel-header">Hottest Features</div>
                        <TopFeatures />
                    </div>
                    <div className="stats-block">
                        <div className="panel-header">Purchases - weekly (Last 15 days)</div>
                        <RecentSales />
                    </div>
                </div>
            </div>
        );
    }
}
