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
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    height: 36,
    width: 150,
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 111,
    alignSelf: 'stretch',
  },

  buttonText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: 5
  },
});

module.exports = Button
