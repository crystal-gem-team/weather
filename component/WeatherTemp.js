import { useEffect, useState } from 'react';
import { Text, View, Pressable, useColorScheme, Appearance } from 'react-native';

import {
  Container,
  Location,
  Temperature,
  Variations,
  MinTemperature,
  MaxTemperature,
  Border,
} from './WeatherTemp-style';

export const WeatherTemp = ({ location, children, min, max }) => {
  return (
    <Container>
      <Location>{location}</Location>
      <Temperature>{children}</Temperature>
      <Variations>
        <MinTemperature>{min}</MinTemperature>
        <MaxTemperature>{max}</MaxTemperature>
      </Variations>
      <Border />
    </Container>
  );
};
