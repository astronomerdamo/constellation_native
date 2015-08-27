import React from 'react-native';
var {
  Component,
  StyleSheet,
  View,
  Text
} = React

class Camera extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Camera Page!</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontFamily: 'Helvetica',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: 5
  },
});

module.exports = Camera
