import styled from 'styled-components/native';
import size from '../../utils/size';
import { Dimensions } from 'react-native';
export const Container = styled.View`
  flex: 1;
`
export const JobContainer = styled.View`
  height:${Dimensions.get('window').height/1.25}px;
  background-color: ${({ theme }) => theme.white};
  
  margin-bottom: ${size(20)}px;
  border-radius: 8px;
  overflow: hidden;
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

