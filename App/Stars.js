import React from 'react-native';
var {
  Component,
  StyleSheet,
  View,
  Text
} = React

var stars = require('./Components/StarData/StarsSample.json')
var star = stars[Math.floor(Math.random()*stars.length)]

class Stars extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Random Star!</Text>
        <Text style={styles.text}>id: {star['ID']}</Text>
        <Text style={styles.text}>Proper Name: {star['Proper Name']}</Text>
        <Text style={styles.text}>Right ascension: {star['Right Ascension']}</Text>
        <Text style={styles.text}>Declination: {star['Declination']}</Text>
        <Text style={styles.text}>Spectrum: {star['Spectrum']}</Text>
        <Text style={styles.text}>Constellation: {star['Constellation']}</Text>
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

module.exports = Stars
