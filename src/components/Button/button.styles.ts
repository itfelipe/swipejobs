import styled from 'styled-components/native';
import size from '../../utils/size';

export const Container = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.black};
  justify-content: center;
  align-items: center;
  height: ${size(48)}px;
`;


