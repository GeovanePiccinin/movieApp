import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles';

const Button = ({title, onPress, icon, theme = 'default'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[theme].button_container}>
      <Text style={styles[theme].title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
