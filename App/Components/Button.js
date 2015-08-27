import React from 'react-native';
var {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} = React

class Button extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
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
