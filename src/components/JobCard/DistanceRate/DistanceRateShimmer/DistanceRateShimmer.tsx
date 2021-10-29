import React from 'react'
import ShimmerText from '../../../../shimmers/DefaultShimmer'
import size from '../../../../utils/size'
import { DistanceRateContainer, DistanceContainer, RateContainer, RateDolarContainer } from './distanceRateShimmer.styles'

export default function DistanceRateShimmer() {
  return (
    <DistanceRateContainer>

          <DistanceContainer>
             <ShimmerText style={{ width: '45%', height:10, marginBottom:size(10)}} />
             <ShimmerText style={{ width: '65%', height:20, marginBottom:size(10)}} />
          </DistanceContainer>
          
          <RateContainer>
            <ShimmerText style={{ width: '45%', height:10, marginBottom:size(10)}} />

            <RateDolarContainer>
             <ShimmerText style={{ width: '65%', height:20, marginBottom:size(10)}} />
            </RateDolarContainer>
          </RateContainer>

        </DistanceRateContainer>
  )
}
