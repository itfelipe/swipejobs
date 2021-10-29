import React from 'react'
import  Typography  from '../../Typography'
import { DistanceRateContainer, DistanceContainer, RateContainer, RateDolarContainer } from './distanceRate.styles'
import DistanceRateShimmer from './DistanceRateShimmer/DistanceRateShimmer'

interface DistanceRateProps {
  loading?:boolean;
  miles:number;
  rate:number;
}

export default function DistanceRate(props:DistanceRateProps) {

  const {miles, rate, loading} = props

  return (
    <>
    {!loading?
    (
  <DistanceRateContainer>

          <DistanceContainer>
            <Typography variant='Gotham12Bold'>Distance</Typography>
            <Typography variant='Gotham28' color="white">{miles?miles.toFixed(1):0.0} miles</Typography>
          </DistanceContainer>
          
          <RateContainer>
            <Typography variant='Gotham12Bold'>Hourly Rate</Typography>

            <RateDolarContainer>
              <Typography variant='Gotham14' color="white">$</Typography>
              <Typography variant='Gotham28' color="white">{rate}</Typography>
            </RateDolarContainer>
          </RateContainer>

        </DistanceRateContainer>
        ):
        (
          <DistanceRateShimmer/>
        )
        }
    </>
  )
}
