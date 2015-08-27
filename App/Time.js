import React from 'react-native';
var {
  Component,
  StyleSheet,
  View,
  Text
} = React

class Time extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Time Page!</Text>
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

module.exports = Time
