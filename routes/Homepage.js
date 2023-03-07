import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Background = styled.View`
  height: 100%;
  background: #225350;
`;

const Title = styled.Text`
  color: red;
`;

export const Homepage = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    setWeatherData({ main: { temp: '25°' } });
    // fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=40.748004761173796&lon=-73.9972450826255&appid=9d078590b75f76a8f744905541a91990&units=metric`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setWeatherData(data);
    //   });
  }, []);

  return (
    <Background>
      <Title>Current Temperature: </Title>
      <Title>{weatherData.main ? weatherData.main.temp : '...loading'} </Title>
    </Background>
  );
};
