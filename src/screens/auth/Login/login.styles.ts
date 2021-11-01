import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
import size from '../../../utils/size';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    width: '100%',
    height: '100%',
    paddingTop:10,
    paddingLeft:20,
    paddingRight:20,
    alignSelf:'center',
    justifyContent:'center',
  },
  bounces: false,
})`
flex:1;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'android' ? 'height' : 'padding',
})`
  flex: 1;
`;

export const JobContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  overflow: hidden;
`;

export const UpperHeaderContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.oliveGreen};
  height: ${size(90)}px;
  margin-bottom: ${size(50)}px;
  justify-content: center;
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
  
`

export const BottomContainer = styled.View`
  width: 100%;
  height: 80%;
  align-self: center;
  align-items: center;

`
export const InputContainer = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${size(28)}px;
`
