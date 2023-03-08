import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Text, View, Pressable, useColorScheme, Appearance, Button, Image } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { API } from 'aws-amplify';
import AWS from 'aws-sdk';
import { WEATHER_THEME, PLACEHOLDER_WEATHER, PLACEHOLDER_USER } from '../utils/weather';

import { Date } from '../component/Date';
import { WeatherType } from '../component/WeatherType';
import { WeatherTemp } from '../component/WeatherTemp';
import { Footer, PrimaryButton, SettingsdButton, SettingsIcon, TextButton } from '../component/Footer';
import { Settings } from '../path/Settings';
import settingsIcon from '../assets/settings.png';
import styled from 'styled-components';

import cloudsVisual from '../assets/clouds.png';
import { Background, CloudVisual, Suggestions } from './Homepage-style';
import awsconfig from '../src/aws-exports'


Auth.currentCredentials().then((credentials) => {
  const awsConfig = new AWS.Config({
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    sessionToken: credentials.sessionToken,
    region: awsconfig.aws_cognito_region,
  })
  AWS.config.update(awsConfig);
});



export const Homepage = () => {
  const [weatherData, setWeatherData] = useState(PLACEHOLDER_WEATHER);
  const [userData, setUserData] = useState(PLACEHOLDER_USER);
  const [weatherTheme, setWeatherTheme] = useState(WEATHER_THEME.Default);
  const [isModal, setModal] = useState(false);
  const [username, setUsername] = useState('');
  const [acts, setActs] = useState([]);

  useEffect(() => {
    let type2;
    Auth.currentAuthenticatedUser()
      .then((session) => {
        setUsername(session.username);
        API.get('funshineAPI', '/user/weather', { queryStringParameters: { user: session.username } })
          .then((data) => {
            console.log('got this from the API, ', data)
            // setWeatherData(data), setWeatherTheme(WEATHER_THEME[weatherData.type]);
            API.get('funshineAPI', '/user/activity')
              .then((activity) => {
                if (data.type === 'Clouds') {
                  type2 = 'cloudy'
                }
                console.log('activities are: ', activity.Item.activity[`cloudy,mild`][Math.floor(Math.random() * 5)]);
                setWeatherData({ ...data, suggestions: activity.Item.activity[`cloudy,mild`][Math.floor(Math.random() * 5)] })
                setActs(activity.Item.activity[`cloudy,mild`]);
                
            })
          })
          .catch((error) => console.log(error));
      });
    
  }, []);

  const CloseSettingsButton = styled.Button`
    position: absolute;
    left: 10px;
  `;

  return (
    <Background theme={weatherTheme || '#123'}>
      {isModal ? (
        <Settings>
          <CloseSettingsButton onPress={() => setModal(!isModal)} color='#fff' title='close' />
        </Settings>
      ) : (
        <>
          <View>
            <Date>{weatherData.date}</Date>
          </View>
          <CloudVisual source={cloudsVisual} />
          <WeatherType>{weatherData.type}</WeatherType>
          <WeatherTemp location='New York' min={weatherData.min + '°'} max={weatherData.max + '°'}>
            {weatherData.temp + '°'}
          </WeatherTemp>
          <Suggestions>
            Morning {username}. {weatherData.suggestions}
          </Suggestions>
          <Footer>
            <SettingsdButton onPress={() => setModal(!isModal)}>
              <SettingsIcon source={settingsIcon} />
              </SettingsdButton>

              <PrimaryButton
                onPress={() => {
                  setWeatherData((prev) => {
                    return {
                      ...prev,
                      suggestions: acts[Math.floor(Math.random() * 5)],
                    }
                  })
                  console.log('i am pressed')
                }}
              >
                <TextButton>
                  Show me something else
                </TextButton>
              </PrimaryButton>

          </Footer>
        </>
      )}
    </Background>
  );
};
