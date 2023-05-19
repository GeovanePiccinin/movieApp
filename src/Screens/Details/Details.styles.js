import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  title: {
    color: 'white',
    fontSize: 20,
    margin: 5,
  },
  plot: {
    color: 'white',
    fontSize: 14,
    margin: 5,
  },
});
