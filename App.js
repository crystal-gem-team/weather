import React, {useState} from 'react';
import { createSwitchNavigator, createAppContainer, NavigationActions } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import config from "./src/aws-exports";
import Home from './Components/Home';
import Login from './Components/Login';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});


function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Funshine!</Text>
      <Home/>
      <StatusBar style="auto" />
    </View>
  )
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);
