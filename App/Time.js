import React from 'react-native';

var {
  Component,
  StyleSheet,
  View,
  Text
} = React

var Time = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0, date: Date()};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Your session has lasted: {this.state.secondsElapsed} seconds</Text>
        <Text style={styles.text}>Timestamp: {this.state.date}</Text>
      </View>
    );
  }
});

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

module.exports = Time
