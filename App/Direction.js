import React from 'react-native';
var {
  Component,
  StyleSheet,
  View,
  Text,
  DeviceEventEmitter
} = React
var {
  Accelerometer,
  Magnetometer
} = require('NativeModules');


class Direction extends Component {
  constructor() {
    super()
    this.state = {
      accel_x: 0, accel_y: 0, accel_z: 0,
      rot_x: 0, rot_y: 0, rot_z: 0,
      mag_x: 0, mag_y: 0, mag_z: 0
    }
  }

  componentDidMount() {
    Accelerometer.setAccelerometerUpdateInterval(0.1)

    DeviceEventEmitter.addListener('AccelerationData', (data) => {
      if (data) {
        this.setState({accel_x: data.acceleration.x})
        this.setState({accel_y: data.acceleration.y})
        this.setState({accel_z: data.acceleration.z})
      }
    })
    Accelerometer.startAccelerometerUpdates()

    Magnetometer.setMagnetometerUpdateInterval(0.1)
    DeviceEventEmitter.addListener('MagnetometerData', (data) => {
      this.setState({mag_x: data.magneticField.x})
      this.setState({mag_y: data.magneticField.y})
      this.setState({mag_z: data.magneticField.z})
    })
    Magnetometer.startMagnetometerUpdates()
  }

  pitch(y, z) {
    return Math.atan(y / z) * (180 / Math.PI)
  }

  roll(x, y, z) {
    numerator = -1 * x
    denominator = Math.sqrt(Math.pow(y, 2) + Math.pow(z, 2))
    return Math.atan(numerator / denominator) * (180 / Math.PI)
  }

  render() {
    return (

      <View style={styles.container}>
        <Text>Pitch: {this.pitch(this.state.accel_y, this.state.accel_z)}</Text>
        <Text>Roll: {this.roll(this.state.accel_x, this.state.accel_y, this.state.accel_z)}</Text>
        <Text>Magnetic Field</Text>
        <Text style={styles.text}>x: {this.state.mag_x}</Text>
        <Text style={styles.text}>y: {this.state.mag_y}</Text>
        <Text style={styles.text}>z: {this.state.mag_z}</Text>
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
