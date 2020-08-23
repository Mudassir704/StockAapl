import React, { Component } from 'react'
import { View , Text , processColor} from 'react-native';

import { iex } from '../shared/iex';
import CandleStick from './CandleStick'


class StockData extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            marker: {},
            legend: {},
            xAxis: {},
            yAxis: {},
            isLoading: true
        }
    }

    formatter(time) {
      var s = time.replace(':','');
      // console.log(parseInt(s));
      return parseInt(s);
    }

    componentDidMount() {
        let candledata = [];
        const url = `${iex.base_url}/stock/aapl/intraday-prices?token=${iex.api_token}`
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                var i;
                for (i = 0; i < 30; i++) {
                    if(data[i]['average'] !== null){
                        candledata.push(
                                {
                                  x: this.formatter(data[i]["label"]),
                                  shadowH: data[i]['high'],
                                  shadowL: data[i]['low'],
                                  open: data[i]['open'],
                                  close: data[i]["close"]
                                }, 
                        );
                    }
                }
                this.setState({
                    data: {
                        dataSets: [
                          {
                            values: candledata,
                            label: 'AAPL',
                            config: {
                              highlightColor: processColor('darkgray'),
                
                              shadowColor: processColor('black'),
                              shadowWidth: 3,
                              shadowColorSameAsCandle: true,
                              increasingColor: processColor('#71BD6A'),
                              increasingPaintStyle: 'FILL',
                              decreasingColor: processColor('#D14B5A')
                            },
                          },
                
                        ]
                      },
                      xAxis: {
                        drawLabels: true,
                        drawGridLines: true,
                        position: 'BOTTOM',
                        yOffset: 0,
                        axisLineWidth: 0,
                        axisLineColor: processColor('white'),
                        labelRotationAngle:-30.0,
                        limitLines:[{ limit: 115, lineColor: processColor('red'), lineWidth: 2}],
                        valueFormatter: 'time',
                        valueFormatterPattern: "HH:MM",
                        granularityEnabled: true,
                        granularity: 1,
                        avoidFirstLastClipping: true,

                      },
                      yAxis: {
                        startAtZero:false,
                        drawGridLines: true,
                        left: {
                          enabled: false 
                        },
                        right: {
                          axisLineWidth: 0,
                          axisLineColor: processColor('white')
                        },
                        position:"INSIDE_CHART"
                      },
                      marker: {
                        enabled: true,
                        markerColor: processColor('#2c3e50'),
                        textColor: processColor('white')
                      },
                      legend: {
                        enabled: true,
                        textSize: 15,
                        form: 'SQUARE',
                        wordWrapEnabled: true,
                        position: "ABOVE_CHART_RIGHT",
                      },
                    isLoading: false
                });
                // console.log(this.state.data.dataSets.[0].values[0]);
        });
    };

    render() {
        return (
            <View style={{ flex: 2 }}>
                {/* <Chart data={this.state.data}  isLoading={this.state.isLoading} /> */}
                <CandleStick 
                    data = {this.state.data} 
                    isLoading = {this.state.isLoading} 
                    marker={this.state.marker}
                    legend={this.state.legend}
                    xAxis={this.state.xAxis}
                    yAxis={this.state.yAxis}

                />
                {/* <Text>HEllO!!!!!!!!!!!!!!!</Text> */}
            </View>
        )
    }
}



export default StockData
