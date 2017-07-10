import React from 'react';

export default class RecentSales extends React.Component {
    render() {
        return (
            <div className="recent-sales">
                <div className="panel-header">new deals high touch </div>
                <table className="recent-sales-table">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Plan Type</th>
                            <th>A/M</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="company-name">Netflix</td>
                            <td>Pro Plan</td>
                            <td>Annual</td>
                            <td>USA</td>
                        </tr>
                        <tr>
                            <td className="company-name">Netflix</td>
                            <td>Pro Plan</td>
                            <td>Annual</td>
                            <td>USA</td>
                        </tr>
                        <tr>
                            <td className="company-name">Netflix</td>
                            <td>Pro Plan</td>
                            <td>Annual</td>
                            <td>USA</td>
                        </tr>
                        <tr>
                            <td className="company-name">Netflix</td>
                            <td>Pro Plan</td>
                            <td>Annual</td>
                            <td>USA</td>
                        </tr>
                        <tr>
                            <td className="company-name">Netflix</td>
                            <td>Pro Plan</td>
                            <td>Annual</td>
                            <td>USA</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

