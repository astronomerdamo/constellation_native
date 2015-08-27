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
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },

  buttonText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: 5
  },
});

module.exports = Button
