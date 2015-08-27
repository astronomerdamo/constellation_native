import React from 'react-native';
var {
  Component,
  StyleSheet,
  View,
  Text
} = React

class Button extends Component {
  render() {
    return (
      <View style={styles.button}>
        <View style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Hi</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: 'blue'
  },

  buttonText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 20
  },

  buttonIcon: {
    marginRight: 10,
    height: 20,
    width: 20
  }
});

module.exports = Button
