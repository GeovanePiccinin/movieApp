import {FlatList, TextInput, Button, SafeAreaView} from 'react-native';
import {useState, useEffect} from 'react';
import Card from '../../Components/Card/Card';
import Search from '../../Components/Search/Search';
import styles from './Home.styles';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('star wars');

  const getData = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchText}&apikey=5de16c9a`,
      );
      const responseJson = await response.json();

      //console.log(responseJson);

      setData(responseJson.Search);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        search={getData}
      />

      <FlatList
        numColumns={2}
        data={data}
        renderItem={({item}) => {
          return (
            <Card
              movie={item}
              onSelect={() =>
                navigation.navigate('Details', {movieId: item.imdbID})
              }
            />
          );
        }}
        keyExtractor={item => item.imdbID}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
