import React from 'react-native';
import Button from './App/Components/Button'
import Camera from './App/Camera'
import Time from './App/Time'
import Direction from './App/Direction'
import MyLocation from './App/MyLocation'

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS,
  Image
} = React;

class Welcome extends Component {
  navigateTo(pageName, component) {
    this.props.navigator.push({
      name: pageName,
      component: component
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'http://www.hdiphone6wallpaper.com/wp-content/uploads/Space/Blue%20Star%20Universe%20iPhone%206%20Wallpaper.jpg'}}
         style={styles.backgroundPicture}>
           <Text style={styles.welcome}>
             Welcome to Constellation!
           </Text>
           <Button text="Camera" onPress={() => this.navigateTo('Camera', Camera)}/>
           <Button text="Time" onPress={() => this.navigateTo('Time', Time)}/>
           <Button text="Direction" onPress={() => this.navigateTo('Direction', Direction)} />
           <Button text="Location" onPress={() => this.navigateTo('Location', MyLocation)}/>
        </Image>
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
          title: 'Welcome to Constellation',
          component: Welcome
        }}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'transparent',
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
  },
  backgroundPicture: {
    flex: 1,
    resizeMode: 'cover',
  }
});

AppRegistry.registerComponent('constellation_native', () => Constellation);
