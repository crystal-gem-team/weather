import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Authenticator } from './routes/Authenticator';
import { Homepage } from './routes/Homepage';

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
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Start' component={Authenticator} options={{ title: 'Starting' }} /> */}
        <Stack.Screen
          name='Main'
          component={Homepage}
          options={{
            title: 'fun.shine',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#225350',
            },
          }}
        />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
