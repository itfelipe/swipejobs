import React, {  useState } from 'react'
import SeparationLine  from '../../SeparationLine'
import JobInfo from '../../JobInfo'
import { ButtonContainer, Container } from './jobInfoList.styles'
import JobInfoListShimmer from './JobInfoListShimmer/JobInfoListShimmer'
import  Button from '../../Button'
import acceptJob from '../../../services/request/acceptJob'
import rejectJob from '../../../services/request/rejectJob'
import getGeolocation from '../../../services/request/geolocation'


interface JobInfoListProps{
  loading?:boolean;
  location:string;
  miles:number;
  requirements:string;
  shift:{};
  reportTo:{};
  jobId:string;
}

export default function JobInfoList(props:JobInfoListProps) {
  const {loading,location, requirements,miles,shift,reportTo,jobId} = props
  
  
  
   const cellphoneMask = (phone: string) => {
    const phoneNumber = phone ? phone.replace(/\D/g, '') : '';
      const phoneFormatted = phoneNumber.replace(
        /(\d{3})(\d{3})(\d{3})/,
        '($1) $2-$3'
      );
      return phoneFormatted;
  
  };


  const [loadingButtonAccept, setLoadingButtonAccept] = useState(false)
  const [loadingButtonReject, setLoadingButtonReject] = useState(false)

  const acceptJobHandler = async () =>{
    setLoadingButtonAccept(true)
    await acceptJob({ jobId})
    setLoadingButtonAccept(false)
  }
  const rejectJobHandler = async () =>{
    setLoadingButtonReject(true)
    await rejectJob({ jobId})
    setLoadingButtonReject(false)
  }

  const [isModalOpen, setModalOpen] = useState(false)

  const modalHandler = ()=>{
    setModalOpen(!isModalOpen)
  }


  return (
    <>
    {!loading ? (
   <Container>
   
        <JobInfo title="Shift Dates" description={shift} icon='calendar-month' onPress={()=>modalHandler()} visible={isModalOpen}/>
        <SeparationLine/>
        <JobInfo title="Location" description={location} miles={miles} icon='map-marker' onPress={()=>getGeolocation({address:location})}/>
         <SeparationLine/>
        <JobInfo title="Requirements" description={requirements?requirements:"No requirements infos"} icon='tools'/>
         <SeparationLine/>
        <JobInfo title="Report To" description={reportTo?reportTo.name + ', ' + cellphoneMask(reportTo.phone):'No data available'} icon='account-circle'/>
        
        <ButtonContainer>
          <Button title='No Thanks' 
          outlined
          loading={loadingButtonReject}
          onPress={()=>{rejectJobHandler()}}   
          containerStyle={{width:'46%'}}/>
          
          <Button 
          title="I'll Take it" 
          loading={loadingButtonAccept}
          onPress={()=>{acceptJobHandler()}} 
          containerStyle={{width:'46%'}}/> 

        </ButtonContainer>
      
   </Container>
   ):
       <JobInfoListShimmer/>
    }
      
  </>
  )
}
