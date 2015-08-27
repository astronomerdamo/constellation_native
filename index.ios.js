import React from 'react-native';
import Button from './App/Components/Button'
import Direction from './App/Direction'

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS
} = React;

class Welcome extends Component {
  foo() {
    this.props.navigator.push({
      name: 'Direction',
      component: Direction
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Constellation!
        </Text>
        <Button text="Camera" onPress={() => {}}/>
        <Button text="Time" onPress={() => {}}/>
        <Button text="Direction" onPress={() => this.foo()} />
        <Button text="Location" onPress={() => {}}/>
      </View>
    );
  }
}

class Constellation extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.rootContainer}
        initialRoute={{
          title: 'Constellation',
          component: Welcome
        }}/>
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
  rootContainer: {
    flex: 1
  }
});

AppRegistry.registerComponent('constellation_native', () => Constellation);
