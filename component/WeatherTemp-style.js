import styled from 'styled-components/native';

export const Location = styled.Text`
  display: flex;
  width: 100%;
  font-size: 24px;
  padding-left: 16px;
  font-family: System;
  font-weight: 700;
  margin-bottom: -12px;
  color: #fff;
  z-index: 2;
`;

export const Container = styled.View`
  position: relative;
  width: 100%;
  padding-top: 40%;
`;

export const Border = styled.View`
  width: 100%;
  margin-left: 16px;
  height: 1px;
  background: #fff;
`;

export const Temperature = styled.Text`
  color: white;
  font-family: System;
  font-size: 140px;
  font-weight: 900;
  font-stretch: expanded;
  padding-left: 16px;
`;

export const Variations = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  padding-left: 16px;
  padding-right: 16px;
`;

export const MinTemperature = styled.Text`
  font-family: System;
  font-weight: 800;
  font-size: 24px;
  font-stretch: expanded;
  color: rgba(255, 255, 255, 0.6);
`;

export const MaxTemperature = styled.Text`
  font-family: System;
  font-weight: 800;
  font-size: 24px;
  font-stretch: expanded;
  color: #fff;
`;

export const BorderWrapper = styled.View`
  padding-top: 12px;
  padding-bottom: 16px;
`;

export const Icon = styled.Text`
  font-family: System;
  font-size: 36px;
`;

export const LocationIcon = styled.Image`
  width: 16px;
  height: 16px;
`;
