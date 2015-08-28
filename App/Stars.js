import React from 'react-native';
var {
  Component,
  StyleSheet,
  View,
  Text,
  SVGComponent
} = React

var stars = require('./Components/StarData/Stars.json')
var star = stars[Math.floor(Math.random()*stars.length)]

function getStarColour (spectrum) {
  if (spectrum === 'A') {
    starcolour = '#CACEFE';
  } else if (spectrum === 'B') {
    starcolour = '#8A97FF';
  } else if (spectrum === 'F') {
    starcolour = '#FEFEFE';
  } else if (spectrum === 'G') {
    starcolour = '#FFF568';
  } else if (spectrum === 'K') {
    starcolour = '#FFAA4F';
  } else if (spectrum === 'M') {
    starcolour = '#FF6543';
  } else if (spectrum === 'O') {
    starcolour = '#646FFF';
  } else {
    starcolour = 'green';
  }
  return starcolour;
}

// bv to t
function bv_to_rgb(bv) {
  var t = 4600 * ((1 / ((0.92 * bv) + 1.7)) +(1 / ((0.92 * bv) + 0.62)) )
  console.log('#'+t)

  // t to xyY
  var x, y = 0

  if (t >= 1667 & t <= 4000) {
    x = ((-0.2661239 * Math.pow(10,9)) / Math.pow(t,3)) + ((-0.2343580 * Math.pow(10,6)) / Math.pow(t,2)) + ((0.8776956 * Math.pow(10,3)) / t) + 0.179910
  } else if (t > 4000) {
    x = ((-3.0258469 * Math.pow(10,9)) / Math.pow(t,3)) + ((2.1070379 * Math.pow(10,6)) / Math.pow(t,2)) + ((0.2226347 * Math.pow(10,3)) / t) + 0.240390
  }

  if (t >= 1667 & t <= 2222) {
    y = -1.1063814 * Math.pow(x,3) - 1.34811020 * Math.pow(x,2) + 2.18555832 * x - 0.20219683
  } else if (t > 2222 & t <= 4000) {
    y = -0.9549476 * Math.pow(x,3) - 1.37418593 * Math.pow(x,2) + 2.09137015 * x - 0.16748867
  } else if (t > 4000) {
    y = 3.0817580 * Math.pow(x,3) - 5.87338670 * Math.pow(x,2) + 3.75112997 * x - 0.37001483
  }

  console.log('xy')
  console.log(x)
  console.log(y)

  // xyY to XYZ, Y = 1
  var Y = 1.0
  var X = (y == 0)? 0 : (x * Y) / y
  var Z = (y == 0)? 0 : ((1 - x - y) * Y) / y

  console.log('XYZ')
  console.log(X)
  console.log(Y)
  console.log(Z)

  //XYZ to rgb
  /*var r = 0.41847 * X - 0.15866 * Y - 0.082835 * Z
  var g = -0.091169 * X + 0.25243 * Y + 0.015708 * Z
  var b = 0.00092090 * X - 0.0025498 * Y + 0.17860 * Z*/

  //XYZ to rgb
  var r = 3.2406 * X - 1.5372 * Y - 0.4986 * Z
  var g = -0.9689 * X + 1.8758 * Y + 0.0415 * Z
  var b = 0.0557 * X - 0.2040 * Y + 1.0570 * Z

  console.log(r*255)
  console.log(g*255)
  console.log(b*255)

  //linear RGB to sRGB
  var R = (r <= 0.0031308)? 12.92*r : 1.055*Math.pow(r,1/0.5)-0.055
  var G = (g <= 0.0031308)? 12.92*g : 1.055*Math.pow(g,1/0.5)-0.055
  var B = (b <= 0.0031308)? 12.92*b : 1.055*Math.pow(b,1/0.5)-0.055

  console.log(R*255)
  console.log(G*255)
  console.log(B*255)
  return [Math.round(R*255),Math.round(G*255),Math.round(B*255)]
}


var Stars = React.createClass ({
  getInitialState: function() {
    return stars[Math.floor(Math.random()*stars.length)];
  },
  tick: function() {
    this.setState(stars[Math.floor(Math.random()*stars.length)])
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Random Star!</Text>
        <Text style={styles.text}>id: {this.state['ID']}</Text>
        <Text style={styles.text}>Proper Name: {this.state['Proper Name']}</Text>
        <Text style={styles.text}>Right ascension: {this.state['Right Ascension']}</Text>
        <Text style={styles.text}>Declination: {this.state['Declination']}</Text>
        <Text style={styles.text}>Spectrum: {this.state['Spectrum']}</Text>
        <Text style={styles.text}>Constellation: {this.state['Constellation']}</Text>
        <View style={{borderRadius: 100, borderWidth: 0, width: 200, height: 200, backgroundColor: getStarColour(this.state['Spectrum'][0])}} />
      </View>
    );
  }
})

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

module.exports = Stars
