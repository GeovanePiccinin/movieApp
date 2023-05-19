import {useState, useEffect} from 'react';
import {Text, ScrollView, Image, Dimensions, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../Components/Button/Button';

import styles from './Details.styles';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const Details = ({route}) => {
  const {movieId} = route.params;

  const [data, setData] = useState(null);
  const [favorited, setFavorited] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${movieId}&apikey=5de16c9a`,
      );
      const responseJson = await response.json();

      //console.log(responseJson);

      setData(responseJson);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    checkFavorites(movieId);
  }, []);

  const checkFavorites = async movieId => {
    try {
      movieId = await AsyncStorage.getItem(movieId);
      if (movieId) {
        setFavorited(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleFavoritesMovie = async movieId => {
    try {
      if (favorited) {
        await AsyncStorage.removeItem(movieId);
        setFavorited(false);
      } else {
        await AsyncStorage.setItem(movieId, movieId);
        setFavorited(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!data) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: data.Poster}}
          style={{height: SCREEN_WIDTH, width: SCREEN_WIDTH}}
        />
        <Text style={styles.title}>{data.Title}</Text>
        <Text style={styles.plot}>{data.Plot}</Text>
        <Button
          onPress={() => toggleFavoritesMovie(data.imdbID)}
          title={favorited ? 'Remove from favorites' : 'Add to favorites'}
          color="#841584"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
