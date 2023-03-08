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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  button: {
    backgroundColor: '#06805D',
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Homepage />
    </>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name='Main'
    //       component={Homepage}
    //       options={{
    //         title: 'fun.shine',
    //         headerStyle: {
    //           backgroundColor: '#00f',
    //         },
    //       }}
    //     />
    //   </Stack.Navigator>
    // <StatusBar style='auto' />
    // </NavigationContainer>
  );
}

export default withAuthenticator(App);
