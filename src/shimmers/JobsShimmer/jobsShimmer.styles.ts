import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import size from '../../utils/size';

export const Container = styled.SafeAreaView`
  flex: 1;
`
export const JobContainer = styled.View`
  flex:1;
  height:${Dimensions.get('window').height/1.2}px;
  background-color: ${({ theme }) => theme.white};

  border-radius: 8px;
  overflow: hidden;
  margin-bottom: ${size(16)}px;
`;

export const ImageContent = styled.Image`
  height: 100%;
  width: 100%;
`
export const JobTitleContainer = styled.View`
  margin-bottom: ${size(8)}px;
  padding-left: ${size(16)}px;

`

export const ImageContainer = styled.View`
  height: 20%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  width: 88%;
  justify-content: space-evenly;
  align-self: center;
`