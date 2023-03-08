import { useEffect, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { Auth } from 'aws-amplify';
import { styles } from '../App';
import AWS from 'aws-sdk';
import awsconfig from '../src/aws-exports'


Auth.currentCredentials().then((credentials) => {
  const awsConfig = new AWS.Config({
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    sessionToken: credentials.sessionToken,
    region: awsconfig.aws_cognito_region, 
  })
  AWS.config.update(awsConfig);
});





export const Homepage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [user, setUser] = useState('');
  

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  const getUserInfo = async () => {
    try {
      const session = await Auth.currentAuthenticatedUser();
      console.log(session.username, session.attributes.email);
      setUser(session.username);
    } catch (err) {
      console.log('error getting user: ', err)
    }
  };

  const addUser = () => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: 'Funshine',
      Key: {
        'funshine': 'activity'
      }
  
    };
    docClient.get(params, (err, data) => {
      if (err) {
        console.log('Error finding user:', err);
      } else {
        console.log('User found successfully:', data.Item.activity['rainy,hot']);
      }
    });
  };


  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=40.748004761173796&lon=-73.9972450826255&appid=9d078590b75f76a8f744905541a91990&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        getUserInfo();
        addUser();
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Temperature: </Text>
      <Text style={styles.text}>{weatherData.main ? weatherData.main.temp : '...loading'} </Text>
      <Text>{ user}</Text>
    </View>
  );
};


