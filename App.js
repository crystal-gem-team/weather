import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});

const Stack = createNativeStackNavigator();

const Authenticator = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title='Go to Main' onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

const Homepage = () => {
  const [weatherData, setWeatherData] = useState({});

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
      <Text style={styles.text}>Current Temperature: </Text>
      <Text style={styles.text}>{weatherData.main ? weatherData.main.temp : '...loading'} </Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Start' component={Authenticator} options={{ title: 'Starting' }} />

        <Stack.Screen name='Main' component={Homepage} options={{ title: 'fun.shine' }} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
