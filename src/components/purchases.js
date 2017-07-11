import React from 'react';
import Highcharts from 'highcharts';

import purchases from '../data/purchases';

const tickInterval = 1000 * 60 * 60 * 24 * 7;

const buildSeriesData = () => {
    return purchases.reduce((result, current) => {
        result.commercial.push([ current.time, parseInt(current.commercial) ]);
        result.inapp.push([ current.time, parseInt(current.inapp) ]);

        return result;
    }, {commercial: [], inapp: [] })
};

const chartOptions = chartData => ({
    chart: {
        height: 250,
        type: 'column',
    },
    credits: { enabled: false },
    title: { text: '' },
       legend: {
        symbolHeight: 12,
        symbolWidth: 12,
        symbolRadius: 0
    },
    xAxis: {
        tickInterval,
        type: 'datetime'
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            enabled: false
        }
    },
    tooltip: {
        formatter: function () {
            var inApp = this.series.name === 'In App' ? this.y : this.point.stackTotal - this.y;
            var commercial = this.series.name === 'Commercial Website' ?
            this.y : this.point.stackTotal - this.y;
            return '<b>' + Highcharts.dateFormat('%b %e %Y', new Date(this.x)) + '</b><br/>' +
                'Commercial Website: ' + commercial + '<br/>' +
                'In App Purchase: ' + inApp
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
        },
        series: {
            colorByPoint: false
        }
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Commercial Website',
        data: chartData.commercial,
        stack: '1',
        color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
                [0, '#f57978'],
                [1, '#df086a']
            ]
        }
    }, {
        name: 'In App',
        data: chartData.inapp,
        color: '#dfdfdf',
        stack: '1',
        color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
                [0, '#4f206f'],
                [1, '#3879b1']
            ]
        }
    }]
});

export default class Purchases extends React.Component {
    componentDidMount() {
        Highcharts.chart(this.chart, chartOptions(buildSeriesData()));
    }
    render() {
        console.log(buildSeriesData());
        return <div ref={ elm => this.chart = elm } />;
    }
}
