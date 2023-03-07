import React, {useState} from 'react';
import { createSwitchNavigator, createAppContainer, NavigationActions } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Amplify, Auth, Hub} from 'aws-amplify';
import config from "./src/aws-exports";
import Home from './Components/Home';
import Login from './Components/Login';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});



export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  Hub.listen('auth', (data) => {
    console.log('something is happening')
    console.log(data.payload.username);
  })

  if (isLogged) {
    return (
      <View style={styles.container}>
        <Text>Welcome to Funshine!</Text>
        <Home />
        <StatusBar style="auto" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text>Welcome to Funshine!</Text>
       <Login/>
        <StatusBar style="auto" />
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default withAuthenticator(App);
