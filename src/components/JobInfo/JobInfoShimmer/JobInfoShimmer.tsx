import React from 'react'
import ShimmerText from '../../../shimmers/DefaultShimmer'
import { Container, LeftContainer, RightContainer } from './jobInfoShimmer.styles'
import size from '../../../utils/size'

export default function JobInfoShimmer() {
  return (
    <Container>
      <LeftContainer>
         <ShimmerText style={{ width: 50, height:50, borderRadius:50}} />
      </LeftContainer>

      <RightContainer>
        <ShimmerText style={{ width: 60, height:10, marginBottom:size(10)}} />
        <ShimmerText style={{ width: 80, height:10, marginBottom:size(6)}} />
        <ShimmerText style={{ width: 70, height:10}} />
      </RightContainer>
     
    </Container>
  )
}
