import React from 'react-native';
import Button from './App/Components/Button'

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component
} = React;

class constellation_native extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Constellation!
        </Text>
        <Button />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('constellation_native', () => constellation_native);
