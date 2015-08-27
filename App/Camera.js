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
    this.state = {avatarSource: null}
  }

  avatarTapped() {
    var options = {
      title: 'Select Avatar',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...',
      takePhotoButtonHidden: false,
      chooseFromLibraryButtonTitle: 'Choose from Library...',
      chooseFromLibraryButtonHidden: false,
      returnBase64Image: true,
      returnIsVertical: false,
      quality: 0.2
    };

    UIImagePickerManager.showImagePicker(options, (type, response) => {
      console.log(type);
      if (type !== 'cancel') {
        const source = {uri: 'data:image/jpeg;base64,' + response, isStatic: true};
        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={::this.avatarTapped}>
          <View style={[styles.avatar, styles.avatarContainer]}>
          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
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
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});

module.exports = Camera
