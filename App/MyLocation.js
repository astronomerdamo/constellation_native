import React from 'react-native';
var {
  Component,
  StyleSheet,
  View,
  Text
} = React

exports.title = 'My Location';

var MyLocation = React.createClass({
  watchID: (null: ?number),

  getInitialState: function() {
    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => this.setState({initialPosition}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
      this.setState({lastPosition});
    });
  },

  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.location_head}>
          You were here
        </Text>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {JSON.stringify(this.state.initialPosition.coords)}
        </Text>
        <Text style={styles.location_head}>
          But now you're here
        </Text>
        <Text>
          as at {JSON.stringify(this.state.lastPosition.timestamp)}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {JSON.stringify(this.state.lastPosition.coords)}
        </Text>
      </View>
    );
  }
});

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
  fontWeight: '500',
  },
  location_head: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = MyLocation
