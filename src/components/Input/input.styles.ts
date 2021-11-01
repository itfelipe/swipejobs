import styled from 'styled-components/native';
import size from '../../utils/size';


export const Container = styled.View`
  width: 90%;
  height: ${size(50)}px;
  padding: ${size(6)}px;
`

export const InputText = styled.TextInput`
  font-size: ${size(12)}px;
  font-weight: bold;
  font-family: 'Gotham-Medium';
  color: ${({ theme }) => theme.black};
  height: ${size(30)}px;
  margin-right: ${size(16)}px;
  padding-bottom: 0px;
  padding-left: 0px;
`;
