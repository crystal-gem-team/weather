import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import {
  Text,
  View,
  Pressable,
  useColorScheme,
  Appearance,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import styled from 'styled-components/native';
import { API } from 'aws-amplify';

import { Date } from '../component/Date';
import { WeatherType } from '../component/WeatherType';
import { WeatherTemp } from '../component/WeatherTemp';

import { WEATHER_THEME } from '../utils/weather';

// to make a call to using funshineAPI
//
// API.get('funshineAPI', '/user')
//
// for now path to get weather '/user/weather'

const Background = styled.View`
  position: relative;
  padding-top: 72px;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme || 'red'};
`;

const Header = styled.View`
  width: 100%;
  display: flex;
`;

const Title = styled.Text`
  color: red;
`;

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
    setWeatherData({
      date: 'April 9, 2020',
      temp: '75°',
      min: '24°',
      max: '99°',
      type: 'cloudy',
    });
  }, []);

  return (
    <Background theme="#06805D">
      <View>
        <Date>{weatherData.date}</Date>
        <WeatherType>{weatherData.type}</WeatherType>
      </View>
      <WeatherTemp
        location="New York"
        min={weatherData.min}
        max={weatherData.max}
      >
        {weatherData.temp}
      </WeatherTemp>
    </Background>
  );
};
