import React from 'react';
import moment from 'moment';

import recentSales from '../data/new-deals';
import { socket } from '../config';

const DateCell = date => {
    const momentDate = moment.unix(date);
    const current = moment();

    if (current.diff(momentDate, 'months', true) >= 1) {
        return momentDate.format('DD/MM/YYYY');
    }

    return <span className="sale-date-label">{ momentDate.fromNow() }</span>;
};

export default class RecentSales extends React.Component {
    constructor(props) {
        super(props);

        this.state = { recentSales };
    }


    componentDidMount() {
        this._isMounted = true;
        socket.on('stripe', msg => {
            this.handlePurchase(msg);
        });
    }

    handlePurchase({ customer, plan }) {
        const newPurchase = {
            name: customer,
            plan: plan.name,
            type: plan.interval === "month" ? "Monthly" : "Annual",
            date: moment().unix(),
            amount: plan.amount
        };

        const { recentSales } = this.state;
        const newSales = [newPurchase, ...recentSales.slice(0, 4)];

        this.setState({ recentSales: newSales });
    }

    render() {
        return (
            <div className="recent-sales">
                <table className="recent-sales-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Plan Type</th>
                            <th>A/M</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.recentSales.map((sale, index) => {
                            return (
                                <tr key={index}>
                                    <td className="company-name">{ sale.name }</td>
                                    <td className="sale-plan">{sale.plan}</td>
                                    <td className="sale-type">{sale.type}</td>
                                    <td className="sale-date">
                                        { DateCell(sale.date) }
                                    </td>
                                    <td className="sale-amount">{sale.amount}$</td>
                                </tr>
                            );
                        }) }
                    </tbody>
                </table>
            </div>
        );
    }
}

