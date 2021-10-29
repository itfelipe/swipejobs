import styled from 'styled-components/native';
import size from '../../../utils/size';

export const DistanceRateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${size(10)}px;

  background-color: ${({ theme }) => theme.oliveGreen};
`

export const DistanceContainer = styled.View`
  align-items: flex-start;
`
export const RateContainer = styled.View`
  align-items: flex-end;
`
export const RateDolarContainer = styled.View`
  flex-direction: row;
`