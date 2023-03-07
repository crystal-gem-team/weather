import { Button, View } from 'react-native';

export const Authenticator = ({ navigation }) => {
  return (
    <View>
      <Text>fun.shine</Text>
      <Button title='Go to Main' onPress={() => navigation.navigate('Main')} />
    </View>
  );
};
