import styled from 'styled-components';

export const FooterButton = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  column-gap: 16px;
`;

export const SettingsdButton = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: System;
  border-radius: 12px;
  height: 66px;
  width: 66px;
  border: 1px solid #fff;
`;

export const PrimaryButton = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: System;
  border-radius: 12px;
  height: 66px;
  flex-grow: 1;
  border: 1px solid #fff;
`;

export const TextButton = styled.Text`
  font-family: System;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export const SettingsIcon = styled.Image`
  width: 27px;
  height: 27px;
`;

export const Footer = ({children}) => {
  console.log(children);
  return (
    <FooterButton>
        {children}
     
      <PrimaryButton>
        <TextButton>Something else</TextButton>
      </PrimaryButton>
    </FooterButton>
  );
};
