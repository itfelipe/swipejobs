import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import size from '../../../utils/size';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${size(16)}px;
`
export const JobContainer = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.white};

  border-radius: 8px;
  overflow: hidden;
`;

export const MiddleContainer = styled.View`
  align-items: center;
  margin-top: ${size(20)}px;
`

export const UpperHeaderContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.oliveGreen};
  height: ${size(80)}px;
  margin-bottom: ${size(50)}px;
`

export const ImageContainer = styled.View`
  width: ${size(120)}px;
  height: ${size(120)}px;
  border-radius: 80px;
  background-color:${({ theme }) => theme.primary}; 

  position: absolute;
  justify-content: center;
  align-items: center;
  bottom:0;
  transform: translateY(64px);
`
export const Image = styled.Image`
  width: ${size(116)}px;
  height: ${size(116)}px;
  border-radius: 80px;
`
export const LogoImage = styled.Image`
  margin-top: ${size(10)}px;
  width: ${size(200)}px;
  height: ${size(42)}px;
  align-self: center;
  margin: 10px;
  
`
export const LottieContainer = styled.View`
  width: 70%;
  height: 45%;
`