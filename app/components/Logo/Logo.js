import React, { Component } from 'react';
import {
  View, Image, Text, ImageBackground, Keyboard, Animated, Platform,
} from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.KeyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.KeyboardShowListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.KeyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$smallContainerSize,
      duration: ANIMATION_DURATION,
    }).start();

    Animated.timing(this.imageWidth, {
      toValue: styles.$smallImageSize,
      duration: ANIMATION_DURATION,
    }).start();
  };

  keyboardHide = () => {
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$largeContainerSize,
      duration: ANIMATION_DURATION,
    }).start();

    Animated.timing(this.imageWidth, {
      toValue: styles.$largeImageSize,
      duration: ANIMATION_DURATION,
    }).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyle = [styles.logo, { width: this.imageWidth, height: this.imageWidth }];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <ImageBackground
            source={require('./images/background.png')}
            resizeMode="stretch"
            style={styles.backgroundImage}
          >
            <Animated.Image source={require('./images/logo.png')} style={imageStyle} />
          </ImageBackground>
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
