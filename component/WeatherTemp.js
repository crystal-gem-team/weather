import { useEffect, useState } from 'react';
import { Text, View, Pressable, useColorScheme, Appearance } from 'react-native';
import locationImage from '../assets/location.png';

import {
  Container,
  Location,
  Temperature,
  Variations,
  MinTemperature,
  MaxTemperature,
  Border,
  BorderWrapper,
  Icon,
  LocationIcon,
} from './WeatherTemp-style';

export const WeatherTemp = ({ location, children, min, max }) => {
  return (
    <Container>
      <Variations>
        <LocationIcon source={locationImage} />
        <Location>{location}</Location>
      </Variations>
      <Temperature>{children}</Temperature>
      <Variations>
        <MinTemperature>{min}</MinTemperature>
        <MaxTemperature>{max}</MaxTemperature>
      </Variations>
      <BorderWrapper>
        <Border />
      </BorderWrapper>
      <Variations>
        <Icon>👩‍🍳</Icon>
        <Icon>🍪</Icon>
      </Variations>
    </Container>
  );
};
