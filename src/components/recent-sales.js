import React from 'react';
import moment from 'moment';

import recentSales from '../data/new-deals';

const DateCell = date => {
    debugger;
    const momentDate = moment.unix(date);
    const current = moment();

    if (current.diff(momentDate, 'months', true) >= 1) {
        return momentDate.format('DD/MM/YYYY');
    }

    return <span className="sale-date-label">{ momentDate.fromNow() }</span>;
};

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
                            <th>Date</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        { recentSales.map((sale, index) => {
                            return (
                                <tr key={index}>
                                    <td className="company-name">
                                        <div className="image-cropper">
                                            <img className="company-logo" src={sale.logo} />
                                        </div>
                                        { sale.name }
                                    </td>
                                    <td className="sale-plan">{sale.plan}</td>
                                    <td className="sale-type">{sale.type}</td>
                                    <td className="sale-date">
                                        { DateCell(sale.date) }
                                    </td>
                                    <td className="sale-rank">{sale.rank}</td>
                                </tr>
                            );
                        }) }
                    </tbody>
                </table>
            </div>
        );
    }
}

