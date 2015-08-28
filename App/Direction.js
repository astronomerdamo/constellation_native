import React from 'react-native';
var {
  Component,
  StyleSheet,
  View,
  Text,
  DeviceEventEmitter
} = React
var {
  Accelerometer
} = require('NativeModules');


class Direction extends Component {
  constructor() {
    super()
    this.state = {x: 0, y: 0, z: 0}
  }

  componentDidMount() {
    Accelerometer.setAccelerometerUpdateInterval(0.1) // in seconds

    DeviceEventEmitter.addListener('AccelerationData', function (data) {
      if (data) {
        this.state.x = data.acceleration.x
        this.state.y = data.acceleration.y
        this.state.z = data.acceleration.z
      }
    })
    Accelerometer.startAccelerometerUpdates() // you'll start getting AccelerationData events above
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>x: {this.state.x}</Text>
        <Text style={styles.text}>y: {this.state.y}</Text>
        <Text style={styles.text}>z: {this.state.z}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: 'blue',
    fontFamily: 'Helvetica',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: 5
  },
});

module.exports = Direction
