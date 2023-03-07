import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Auth } from 'aws-amplify';
// import { withAuthenticator } from 'aws-amplify-react-native';


export default function Login() {
  

  return (
    <View style={styles.container}>
      <Text>Please sign in!</Text>
      <Button
        title="Sign in with Google"
        onPress={() => Auth.federatedSignIn({ provider: "Google" })}
      />
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

// export default withAuthenticator(Login);
