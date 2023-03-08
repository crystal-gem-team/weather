import styled from 'styled-components/native';

export const Background = styled.View`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 72px 0 40px;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme || 'red'};
`;

const Header = styled.View`
  width: 100%;
  display: flex;
`;

const Title = styled.Text`
  color: red;
`;

export const Suggestions = styled.Text`
  font-family: System;
  font-size: 24px;
  font-weight: 500;
  padding: 20px 16px;
  color: #fff;
`;

export const CloudVisual = styled.Image`
  position: absolute;
  top: 110px;
  left: 40px;
  width: 360px;
  height: 330px;
`;
