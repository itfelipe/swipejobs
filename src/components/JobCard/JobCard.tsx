import React from 'react';

import Typography from '../Typography/'
import {Container, ImageContent, JobContainer, JobTitleContainer,ImageContainer } from './jobCard.styles';

import DistanceRate from './DistanceRate/DistanceRate';
import JobInfoList from './JobInfoList/JobInfoList';
import JobsShimmer from '../../shimmers/JobsShimmer/JobsShimmer';



interface JobCardProps{
  imageUrl:string;
  title:string;
  companyName:string;
  miles:number;
  rate:number;
  shift:[],
  location:string;
  requirements:string;
  reportTo:{},
  jobId:string;
  loading:boolean;

}

const JobCard = (props:JobCardProps) => {
  const {
  imageUrl,
  title,
  companyName,
  miles,
  rate,
  shift,
  location,
  requirements,
  reportTo,
  jobId,
  loading
  } = props

  return (
  
<>
  
   
<Container>
    {!loading ?(
      <JobContainer>
          <ImageContainer>
         
            <ImageContent source={{uri:imageUrl}}/>
            
          </ImageContainer>

        <JobTitleContainer>
         
          <Typography variant="Gotham18Bold" >{title}</Typography>
          <Typography variant="Gotham16" >{companyName}</Typography>
          
         
        
        </JobTitleContainer>

        <DistanceRate  miles={miles} rate={rate?rate.toFixed(2):0.0}/>

        <JobInfoList 
        location={location}   
        miles={miles}
        requirements={requirements}
        shift={shift}
        reportTo={reportTo}
        jobId={jobId}
        
        />
      </JobContainer>
       ): <JobsShimmer/> }
      </Container>

   
   
</>
  
  )
}

export default JobCard;