import React from 'react';
import ReactBubbleChart from 'react-bubble-chart';

import { socket } from '../config';

var tooltipProps = [{
    css: 'name',
    prop: '_id'
}, {
    css: 'value',
    prop: 'value',
    display: 'Amount',
}, {
    css: 'package',
    prop: 'package',
    display: 'Package'
}, {
    css: 'tests',
    prop: 'tests',
    display: 'No. of Tests'
}, {
    css: 'users',
    prop: 'users',
    display: 'Concurrent Users'
}, {
    css: 'industry',
    prop: 'industry',
    display: 'Industry'
}];

const data = [{
    _id: "Netflix",
    value: 350,
    colorValue: 1,
    color: "#da1725",
    selected: false,
    package: 'Unlimited',
    tests: 5,
    users: '12K',
    industry: 'TV'
}, {
    _id: "Uber",
    value: 300,
    color: "#1d1d1d",
    colorValue: 2,
        selected: false,
    package: 'Unlimited',
    tests: 5,
    users: '12K',
    industry: 'TV'
}, {
    _id: "Chase",
    value: 290,
    color: "#235cd6",
    colorValue: 3,
        selected: false,
    package: 'Unlimited',
    tests: 5,
    users: '12K',
    industry: 'TV'
}, {
    _id: "Starbucks",
    value: 380,
    color: "#13d883",
    colorValue: 4,
        selected: false,
    package: 'Unlimited',
    tests: 5,
    users: '12K',
    industry: 'TV'
}, {
    _id: "Apple",
    value: 220,
    color: "#505050",
    colorValue: 1,
        selected: false,
    package: 'Unlimited',
    tests: 5,
    users: '12K',
    industry: 'TV'
}, {
    _id: "Wolksvagen",
    value: 210,
    color: "#4368e1",
    colorValue: 1,
        selected: false,
    package: 'Unlimited',
    tests: 5,
    users: '12K',
    industry: 'TV'
}, {
    _id: "Nike",
    value: 200,
    color: "#fdbb30",
    colorValue: 1,
        selected: false,
    package: 'Unlimited',
    tests: 5,
    users: '12K',
    industry: 'TV'
}, {
    _id: "PS",
    value: 180,
    color: "#235cd6",
    colorValue: 2,
        selected: false,
    package: 'Unlimited',
    tests: 5,
    users: '12K',
    industry: 'TV'
}];

class BubbleChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data }
    }

    componentDidMount() {
        this._isMounted = true;
        socket.on('gong', msg => {
            const { data } = this.state;
            const newData = [...data, msg];
            this.setState({ data: newData });
        });
    }

    render () {
        return (
            <div className="top-paying-customers">
                <div className="chart" style={{height: 250, width: '100%' }}>
                    <ReactBubbleChart
                        className="my-cool-chart"
                        data={this.state.data}
                        fontSizeFactor={0.5}
                        legend={false}
                        tooltip={true}
                        tooltipProps={tooltipProps}
                    />
                </div>
            </div>
        );
    }
}

export default BubbleChart;
