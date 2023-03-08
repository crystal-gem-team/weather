import React, { useState } from 'react';
import {
  Modal,
  Text,
  View,
  Switch,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Background } from './Homepage-style';
import styled from 'styled-components';
import { API, Auth } from 'aws-amplify';

export const Settings = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const isCelsius = () => setIsEnabled((previousState) => !previousState);
  const [name, setName] = useState('');
  const [zip, setZip] = useState('');
  const [color, setColor] = useState({ cloudy: '#06805D' });
  // console.log(zip);
  // console.log(name);

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  const CloseSettings = styled.View`
    position: absolute;
  `;

  const TitleView = styled.View`
    display: flex;
    align-items: center;
  `;

  const SettingsView = styled.View`
    display: flex;
    justify-content: center;

    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    column-gap: 16px;
  `;

  const PreferencesView = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
  `;

  const SubmitButton = styled.Pressable`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: System;
    border-radius: 12px;
    height: 66px;
    flex-grow: 1;
    border: 1px solid #fff;
  `;

  const Input = styled.TextInput`
    height: 40px;
    margin: 12px;
    width: 170px;
    border-width: 1px solid;
    padding: 10px
    background-color: #fff;
    border-radius: 12px;
  `;

  const SettingsText = styled.Text`
    font-family: System;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  `;

  const TitleText = styled.Text`
    font-family: System;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
  `;

  const SignOutButton = styled.Pressable`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: System;
    border-radius: 12px;
    height: 66px;
    flex-grow: 1;
    border: 1px solid #fff;
  `;

  const TextButton = styled.Text`
    font-family: System;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  `;

  const MainView = styled.View`
    width: 100%;
    position: relative;
  `;

  return (
    <MainView>
      {children}
      {/* <Modal> */}
      {/* <Background theme={color.cloudy}> */}
      <SafeAreaView>
        <SettingsView>
          <View>
            <TitleView>
              <TitleText>Settings</TitleText>
            </TitleView>
            <PreferencesView>
              <SettingsText>fancy an alias?</SettingsText>
              <TextInput onChangeText={setName} placeholder='new name, new you' value={name} />
              <SettingsText>enter zip to change your location</SettingsText>
              <TextInput
                onChangeText={setZip}
                value={zip}
                placeholder='get me outta here'
                keyboardType='numeric'
              />
              <SettingsText>change temperature scale:</SettingsText>
              <SettingsText>
                fahrenheit
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={isCelsius}
                  value={isEnabled}
                />
                celsius
              </SettingsText>
              <SubmitButton
                onPress={() => {
                  Auth.currentAuthenticatedUser()
                    .then((session) => {
                      console.log('making request')
                      const username = session.username;
                      API.put('funshineAPI', '/user', {
                        body: {
                          name: name,
                          zip: zip,
                          scale: isCelsius ? 'celsius' : 'fahrenheit',
                          username: username
                        }
                      })
                  })
                 
                }}
              >
                <TextButton>update my life</TextButton>
              </SubmitButton>
              <SignOutButton onPress={() => signOut()}>
                <TextButton>Sign Out</TextButton>
              </SignOutButton>
            </PreferencesView>
          </View>
        </SettingsView>
      </SafeAreaView>
      {/* </Background> */}
      {/* </Modal> */}
    </MainView>
  );
};
