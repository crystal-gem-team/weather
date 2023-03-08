import { useEffect, useState } from 'react';
import { Text, View, Pressable, useColorScheme, Appearance } from 'react-native';
import { Block, Type } from './WeatherType-style';

export const WeatherType = ({ children }) => {
  return (
    <Block>
      <Type>{children}</Type>
    </Block>
  );
};
