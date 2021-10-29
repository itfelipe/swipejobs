import styled from 'styled-components/native';
import size from '../../utils/size';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: 18%;
  padding: ${size(10)}px;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: flex-start;
  align-items: center;
`;
export const LeftContainer = styled.View`
  padding: ${size(10)}px;
  
`
export const RightContainer = styled.View`
  margin-right: ${size(20)}px;
`

export const ButtonIcon = styled.TouchableOpacity`
  margin-left: ${size(20)}px;
`