import { useEffect, useState } from 'react';
import { Text, View, Pressable, useColorScheme, Appearance } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  padding-left: 16px;
`;

const Defails = styled.Text`
  color: white;
  font-family: System;
  font-size: 16px;
  font-weight: 500;
`;

export const Date = ({ children }) => {
  return (
    <Container>
      <Defails>fun.shine </Defails>
      <Defails>{children}</Defails>
    </Container>
  );
};
