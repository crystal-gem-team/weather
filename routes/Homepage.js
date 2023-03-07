import { useEffect, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { Auth } from 'aws-amplify';
import { styles } from '../App';
import { Settings } from './Settings';

export const Homepage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=40.748004761173796&lon=-73.9972450826255&appid=9d078590b75f76a8f744905541a91990&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setWeatherData(data);
      });
  }, []);

  return (
    <View>
      <Pressable onPress={() => signOut()}>
        <Text>Sign out</Text>
      </Pressable>
      <Text>Current Temperature: </Text>
      <Text>{weatherData.main ? weatherData.main.temp : '...loading'} </Text>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}>
          <Text>Settings</Text>
      </Pressable>
      { modalVisible ? <Settings>
        <Pressable
        onPress={() => setModalVisible(!modalVisible)}>
          <Text>Hide Settings</Text>
        </Pressable>
      </Settings> : null }
    </View>
  );
};