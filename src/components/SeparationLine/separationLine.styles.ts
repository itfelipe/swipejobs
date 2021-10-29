import styled from 'styled-components/native';
import size from '../../utils/size';

export const Container = styled.View`
  width: 90%;
  height: ${size(1)}px;
  align-self: center;
  background-color: ${({ theme }) => theme.background};
`;

