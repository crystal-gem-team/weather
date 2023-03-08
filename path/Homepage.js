import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Text, View, Pressable, useColorScheme, Appearance, Button, Image } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { API } from 'aws-amplify';

import { WEATHER_THEME, PLACEHOLDER_WEATHER, PLACEHOLDER_USER } from '../utils/weather';

import { Date } from '../component/Date';
import { WeatherType } from '../component/WeatherType';
import { WeatherTemp } from '../component/WeatherTemp';
import { Footer } from '../component/Footer';

import cloudsVisual from '../assets/clouds.png';
import { Background, CloudVisual, Suggestions } from './Homepage-style';

//

export const Homepage = () => {
  const [weatherData, setWeatherData] = useState(PLACEHOLDER_WEATHER);
  const [userData, setUserData] = useState(PLACEHOLDER_USER);
  const [color, setColor] = useState({ cloudy: '#06805D' });

  useEffect(() => {
    API.get('funshineAPI', '/user/weather')
      .then((data) => setWeatherData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Background theme={color.cloudy}>
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
