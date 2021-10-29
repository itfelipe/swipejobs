import styled from 'styled-components/native';
import size from '../../../../utils/size';

export const DistanceRateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${size(14)}px;

  background-color: ${({ theme }) => theme.oliveGreen};
`

export const DistanceContainer = styled.View`
  align-items: flex-start;
  width: 50%;
`
export const RateContainer = styled.View`
  align-items: flex-end;
   width: 50%;
`
export const RateDolarContainer = styled.View`
  flex-direction: row;
`