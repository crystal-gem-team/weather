import React, { useState } from 'react';
import { Modal, Text, View, Switch, SafeAreaView, TextInput, Button, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Settings = ({children}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const isCelsius = () => setIsEnabled(previousState => !previousState);
  const [name, setName] = useState('');
  const [zip, setZip] = useState('');
  console.log(zip);
  console.log(name);

  const Submit = styled.Button`
  
  `;

  const Input = styled.TextInput`
    height: 40px;
    margin: 12px;
    width: 150px;
    border-width: 1px solid;
    padding: 10px
  `;

  const SettingsText = styled.Text`
    font-weight: bold;
  `;


  return (
    <View>
      <Modal>
      <SafeAreaView>
        <View>
          <View>
            <SettingsText>fancy an alias?</SettingsText>
            <Input
              onChangeText={setName}
              placeholder="new name, new you"
              value={name}
            />
            <SettingsText>enter zip to change your location</SettingsText>
            <Input
              onChangeText={setZip}
              value={zip}
              placeholder="get me outta here"
              keyboardType="numeric"
            />
            <SettingsText>change your temperature scale preference:</SettingsText>
            <SettingsText>fahrenheit
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={isCelsius}
              value={isEnabled}
              />
              celsius
              </SettingsText>
              <Submit
              title="update my life"
              // update all preferences 
              onPress={() => {
                return {
                  name: name,
                  zip: zip,
                  scale: isCelsius ? 'celsius' : 'fahrenheit'
                }
              }}
              />
            {children}
          </View>
        </View>
        </SafeAreaView>
      </Modal>
    </View>
  )
};