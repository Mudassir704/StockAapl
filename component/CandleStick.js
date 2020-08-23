import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  processColor
} from 'react-native';

import { CandleStickChart } from 'react-native-charts-wrapper';

export default class CandleStick extends React.Component {

  render() {
    //   console.log(JSON.stringify(this.props.candledata));
      if(this.props.isLoading){
          <View style={{ flex: 1 }}>
              <View style={styles.container}>
                <ActivityIndicator/>
              </View>
          </View>
      }
    return (
        <View style={styles.container}>
        <CandleStickChart
            style={styles.chart}
            data={this.props.data}
            marker={this.props.marker}
            chartDescription={{ text: 'Stock Prices of Apple Inc.', textSize: 30, positionY: 0 }}
            legend={this.props.legend}
            xAxis={this.props.xAxis}
            yAxis={this.props.yAxis}
            maxVisibleValueCount={5}
            autoScaleMinMaxEnabled
            backgroundColor = {"#29966b"}
            pinchZoom={true}
            drawGridBackground={true}
            zoom={{scaleX: 0, scaleY: 0, xValue:  2000, yValue: 0, axisDependency: 'LEFT'}}
            scaleEnabled={true}
            dragEnabled={true}
            // onSelect={this.handleSelect.bind(this)}
            // eslint-disable-next-line react/no-string-refs
            ref="chart"
        />
          {/* <Text>Hello!!!!!!!!</Text> */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 2
  }
});