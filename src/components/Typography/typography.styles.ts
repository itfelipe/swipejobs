import styled from 'styled-components/native';
import size from '../../utils/size';

interface TextProps {
  color?: string;
}

export const Text = styled.Text<TextProps>`
  padding-top: ${size(4)}px;
`;
