import React from 'react-native';

const {
  Component,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  NativeModules: {
    UIImagePickerManager
  }
} = React;

class Camera extends Component {
  constructor() {
    super()
    this.state = {starSource: null}
  }

  starTapped() {
    var options = {
      title: 'Constellation Image',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'From Camera...',
      takePhotoButtonHidden: false,
      chooseFromLibraryButtonTitle: 'From Library...',
      chooseFromLibraryButtonHidden: false,
      returnBase64Image: true,
      returnIsVertical: false,
      quality: 1.0
    };

    UIImagePickerManager.showImagePicker(options, (type, response) => {
      console.log(type);
      if (type !== 'cancel') {
        const source = {uri: 'data:image/jpeg;base64,' + response, isStatic: true};
        this.setState({
          starSource: source
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={::this.starTapped}>
          <View style={[styles.star, styles.starContainer]}>
          { this.state.starSource === null ? <Text>Find a Constellation</Text> :
            <Image style={styles.star} source={this.state.starSource} />
          }
          </View>
        </TouchableOpacity>
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
  text: {
    color: 'blue',
    fontFamily: 'Helvetica',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: 5
  },
  starContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  star: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});

module.exports = Camera
