import { Button, View } from 'react-native';
//import { styles } from '../App';

export const Authenticator = ({ navigation }) => {
  return (
    <View>
      <Button title='Go to Main' onPress={() => navigation.navigate('Main')} />
    </View>
  );
};
