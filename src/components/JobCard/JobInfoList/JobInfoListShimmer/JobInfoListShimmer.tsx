import React from 'react'
import  SeparationLine  from '../../../SeparationLine'
import JobInfoShimmer from '../../../JobInfo/JobInfoShimmer/JobInfoShimmer'

import { Container } from './jobInfoListShimmer.styles'

export default function JobInfoListShimmer() {


  return (
    
   <Container>
     
        <>
        <JobInfoShimmer/>
        <SeparationLine/>
        <JobInfoShimmer/>
         <SeparationLine/>
        <JobInfoShimmer/>
         <SeparationLine/>
        <JobInfoShimmer/>
        </>
      
      
   </Container>
  )
}
