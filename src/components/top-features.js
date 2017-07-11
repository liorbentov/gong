import React from 'react';
import ReactBubbleChart from 'react-bubble-chart';

var tooltipProps = [{
    css: 'value',
    prop: 'value'
}, {
    css: 'change',
    prop: 'colorValue',
    display: 'Change'
}];

const data = [{
    _id: "Taurus",
    value: 250,
    color: '#5836b8',
    selected: false,
    invert: true,
}, {
    _id: "Fail Criteria",
    value: 200,
    color: '#e7306f',
    selected: false,
    invert: true,
}, {
    _id: "on-Prem",
    value: 190,
    color: '#81c42e',
    selected: false,
    invert: true,
}, {
    _id: "Multi Test",
    value: 180,
    color: '#fdbb30',
    selected: false,
    invert: true,
}, {
    _id: "Apm",
    value: 120,
    color: '#29a4ff',
    selected: false,
    invert: true,
}, {
    _id: "PCE",
    value: 110,
    color: '#ce222c',
    selected: false,
    invert: true,
}];

class BubbleChart extends React.Component {
    componentDidMount() {
        this.chart
    }

    render () {
        return (
            <div className="top-paying-customers">
                <div className="chart" style={{height: 250, width: '100%' }}>
                    <ReactBubbleChart
                        className="hottest-features-chart"
                        invert={true}
                        data={data}
                        fontSizeFactor={0.5}
                        tooltip={true}
                        tooltipProps={tooltipProps}
                    />
                </div>
            </div>
        );
    }
}

export default BubbleChart;
