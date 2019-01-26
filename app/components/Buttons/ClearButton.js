import React from 'react';
import {
  TouchableOpacity, View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ClearButton = (props) => {
  const { onPress, text } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Image style={styles.icon} source={require('./images/icon.png')} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClearButton;
