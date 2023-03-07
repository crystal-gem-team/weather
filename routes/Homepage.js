import { useEffect, useState } from 'react';
import { Text, View, Alert, Modal, StyleSheet, Pressable } from 'react-native';
// import { styles } from '../App';
import styled from 'styled-components/native';
import { Settings } from './Settings';

const Title = styled.Text`
  color: red;
`;


export const Homepage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

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
    <View>
      <Title>fun.shine</Title>
      <Title>{weatherData.main ? weatherData.main.temp : '...loading'} </Title>
      {modalVisible ? <Settings/> : null}
      <Pressable
        // style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(!modalVisible)}>
          <Text>Show Modal</Text>
        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
      </Pressable>
    </View>
  );
};
