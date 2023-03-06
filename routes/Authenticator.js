import { Button, View } from 'react-native';
import { styles } from '../App';

export const Authenticator = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title='Go to Main' onPress={() => navigation.navigate('Main')} />
    </View>
  );
};
