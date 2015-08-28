import React from 'react-native';
var {
  Component,
  StyleSheet,
  View,
  Text
} = React

var stars = require('./Components/StarData/Stars.json')
var star = stars[Math.floor(Math.random()*stars.length)]

var Stars = React.createClass ({
  getInitialState: function() {
    return stars[Math.floor(Math.random()*stars.length)];
  },
  tick: function() {
    this.setState(stars[Math.floor(Math.random()*stars.length)])
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 4000);
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Random Star!</Text>
        <Text style={styles.text}>id: {this.state['ID']}</Text>
        <Text style={styles.text}>Proper Name: {this.state['Proper Name']}</Text>
        <Text style={styles.text}>Right ascension: {this.state['Right Ascension']}</Text>
        <Text style={styles.text}>Declination: {this.state['Declination']}</Text>
        <Text style={styles.text}>Spectrum: {this.state['Spectrum']}</Text>
        <Text style={styles.text}>Constellation: {this.state['Constellation']}</Text>
      </View>
    );
  }
})

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

module.exports = Stars
