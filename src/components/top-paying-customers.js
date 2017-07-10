import React from 'react';
import ReactBubbleChart from 'react-bubble-chart';

var colorLegend = [
  //reds from dark to light
  {color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
  //neutral grey
  {color: "#f0f0f0", text: 'Neutral'},
  // blues from light to dark
  "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Positive', textColor: "#ffffff"}
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
    colorValue: 1,
    selected: false
}, {
    _id: "Chase",
    value: 190,
    colorValue: 1,
    selected: false
}, {
    _id: "Starbucks",
    value: 180,
    colorValue: 1,
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
