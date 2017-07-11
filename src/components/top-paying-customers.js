import React from 'react';
import ReactBubbleChart from 'react-bubble-chart';

var colorLegend = [
    {color: "#da1725", textColor: "#ffffff"},
    {color: "#1d1d1d", textColor: "#ffffff"},
    {color: "#235cd6", textColor: "#ffffff" },
    {color: "#13d883", textColor: "#ffffff" },
];

var tooltipProps = [{
    css: 'value',
    prop: 'value'
}, {
    css: 'change',
    prop: 'colorValue',
    display: 'Change'
}];

const data = [{
    _id: "Netflix",
    value: 250,
    colorValue: 1,
    selected: false
}, {
    _id: "Uber",
    value: 200,
    colorValue: 2,
    selected: false
}, {
    _id: "Chase",
    value: 190,
    colorValue: 3,
    selected: false
}, {
    _id: "Starbucks",
    value: 180,
    colorValue: 4,
    selected: false
}, {
    _id: "Apple",
    value: 120,
    colorValue: 1,
    selected: false
}, {
    _id: "Wolksvagen",
    value: 110,
    colorValue: 1,
    selected: false
}, {
    _id: "Nike",
    value: 100,
    colorValue: 1,
    selected: false
}, {
    _id: "PS",
    value: 80,
    colorValue: 2,
    selected: false
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
                        className="my-cool-chart"
                        colorLegend={colorLegend}
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
