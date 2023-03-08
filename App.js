import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Homepage } from './path/Homepage';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify, Auth, Hub } from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return <Homepage />;
}

export default withAuthenticator(App);
