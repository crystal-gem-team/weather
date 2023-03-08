import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Text, View, Pressable, useColorScheme, Appearance, Button, Image } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { API } from 'aws-amplify';

import { WEATHER_THEME } from '../utils/weather';

import { Date } from '../component/Date';
import { WeatherType } from '../component/WeatherType';
import { WeatherTemp } from '../component/WeatherTemp';
import { Footer } from '../component/Footer';

import { WEATHER_THEME } from '../utils/weather';

// to make a call to using funshineAPI
//
// API.get('funshineAPI', '/user')
//
// for now path to get weather '/user/weather'

import cloudsVisual from '../assets/clouds.png';

//

export const Homepage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [userData, setUserData] = useState({});

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  useEffect(() => {
    setWeatherData({
      date: 'April 9, 2020',
      temp: '75°',
      min: '24°',
      max: '99°',
      type: 'cloudy',
      suggestions:
        'Today is the day you can show off your flatmate about these delicious cookies. Cloudy stay home day!',
    });

    setUserData({
      user: 'Patrice',
      location: 'New York',
      scale: 'F',
    });
  }, []);

  return (
    <Background theme='#06805D'>
      <View>
        <Date>{weatherData.date}</Date>
      </View>
      <CloudVisual source={cloudsVisual} />
      <WeatherType>{weatherData.type}</WeatherType>
      <WeatherTemp location='New York' min={weatherData.min} max={weatherData.max}>
        {weatherData.temp}
      </WeatherTemp>
      <Suggestions>
        Morning {userData.user}. {weatherData.suggestions}
      </Suggestions>
      <Footer />
    </Background>
  );
};
