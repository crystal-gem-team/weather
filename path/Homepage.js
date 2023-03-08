import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Text, View, Pressable, useColorScheme, Appearance, Button, Image } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { API } from 'aws-amplify';

import { WEATHER_THEME, PLACEHOLDER_WEATHER, PLACEHOLDER_USER } from '../utils/weather';

import { Date } from '../component/Date';
import { WeatherType } from '../component/WeatherType';
import { WeatherTemp } from '../component/WeatherTemp';
import { Footer, SettingsdButton, SettingsIcon } from '../component/Footer';
import { Settings } from '../path/Settings';
import settingsIcon from '../assets/settings.png';
import styled from 'styled-components';

// to make a call to using funshineAPI
//
// API.get('funshineAPI', '/user')
//
// for now path to get weather '/user/weather'

import cloudsVisual from '../assets/clouds.png';
import { Background, CloudVisual, Suggestions } from './Homepage-style';

//

export const Homepage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [userData, setUserData] = useState({});
  const [isModal, setModal] = useState(false);
  const [color, setColor] = useState({ cloudy: '#06805D'})

  

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

  const CloseSettingsButton = styled.Button`
    position: absolute;
    left: 10px;
  `;

  return (
    <Background theme={color.cloudy}>
      {
         isModal
         ? <Settings>
            <CloseSettingsButton 
              onPress={() => setModal(!isModal)}
              color="#fff"
              title="close"
            />
          </Settings>
         : 
         <>
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

      <Footer>
      <SettingsdButton onPress={() => setModal(!isModal)}>
        <SettingsIcon source={settingsIcon} />
      </SettingsdButton>
      </Footer>
      </>
      }
      </Background>
  );
};
