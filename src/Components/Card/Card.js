import React from 'react';
import {Text, Image, TouchableWithoutFeedback, View} from 'react-native';

import styles from './Card.styles';

const Card = ({movie, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: movie.Poster}} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
