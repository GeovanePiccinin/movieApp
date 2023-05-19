import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Button from '../Button/Button';
import styles from './Search.styles';
import colors from '../../styles/colors';

const Search = ({searchText, setSearchText, search}) => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          clearTextOnFocus
          placeholder="Search a movie"
          placeholderTextColor={colors.text}
          style={styles.input}
          onChangeText={setSearchText}
          autoCorrect={false}
          value={searchText}
        />
      </View>
      <Button title="Search" onPress={() => search()} />
    </View>
  );
};
export default Search;
