import { useEffect, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { Auth } from 'aws-amplify';
import { styles } from '../App';

export const Homepage = () => {
  const [weatherData, setWeatherData] = useState({});

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
        console.log(data);
        setWeatherData(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => signOut()}>
        <Text style={styles.buttonText}>Sign out</Text>
      </Pressable>
      <Text style={styles.text}>Current Temperature: </Text>
      <Text style={styles.text}>{weatherData.main ? weatherData.main.temp : '...loading'} </Text>
    </View>
  );
};