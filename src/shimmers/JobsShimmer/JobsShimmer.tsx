import React from 'react';

import { ActivityIndicator } from 'react-native';

import { Container, JobContainer, JobTitleContainer,ImageContainer } from './jobsShimmer.styles';


import JobInfoListShimmer from '../../components/JobCard/JobInfoList/JobInfoListShimmer/JobInfoListShimmer';
import DistanceRateShimmer from '../../components/JobCard/DistanceRate/DistanceRateShimmer/DistanceRateShimmer';
import ShimmerText from '../DefaultShimmer';

import size from '../../utils/size';

import colors from '../../themes/themes'


const JobsShimmer = () => {


  return (
  
 

    <Container>

      <JobContainer>
          <ImageContainer>
             <ActivityIndicator style={{alignSelf:'center'}} size={40} color={colors.deepBlue}/>
          </ImageContainer>

        <JobTitleContainer>
          
          
            <ShimmerText style={{ width: '70%', height:10, marginBottom:size(10), marginTop:size(10)}} />
            <ShimmerText style={{ width: '50%', height:10, marginBottom:size(10)}} />
          
        </JobTitleContainer>

        <DistanceRateShimmer/>

        <JobInfoListShimmer />
     
      </JobContainer>

    </Container>
   
 
  
  )
}

export default JobsShimmer;