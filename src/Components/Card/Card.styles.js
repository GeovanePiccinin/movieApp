import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

const CARD_WIDTH = Dimensions.get('screen').width / 2 - 10;

export default StyleSheet.create({
  container: {
    borderRadius: radius.smooth,
    margin: spacing.medium,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    border: 5,
    borderColor: 'red',
  },
  image: {
    alignSelf: 'center',
    width: CARD_WIDTH,
    height: (CARD_WIDTH * 250) / 150,
    resizeMode: 'contain',
  },
  inner_container: {
    margin: spacing.medium,
  },
  name: {
    color: colors.text,
    fontSize: 18,
    marginBottom: spacing.tiny,
  },
  genre_container: {
    flexDirection: 'row',
    marginVertical: spacing.small,
  },
  genre: {
    marginRight: spacing.tiny,
    color: colors.text,
    fontSize: 12,
    fontStyle: 'italic',
  },
  rate: {
    color: colors.text,
    marginVertical: spacing.tiny,
  },
  brief: {
    color: colors.text,
    fontStyle: 'italic',
  },
});
