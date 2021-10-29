import React, { useContext, useEffect, useState, } from 'react';

import { JobCard,  Typography} from '../../components';

import {Container, MyFlatList } from './jobs.styles';

import Logo from '../../assets/svg/swipejobss.svg'
import { Context } from '../../context/ContextProvider';
import getJobsData from '../../services/request/jobs';


const Jobs = ({navigation}) => {
   
  const {userInfo, jobsData,addJobsData} = useContext(Context)  
  const [loading, setLoading] = useState(false)
  if(navigation){
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Typography testID="userName" variant="Gotham18" style={{color:'black'}}>{userInfo.firstName} {userInfo.lastName}</Typography>,
      headerLeft: () => (
        <Logo/>
      ),
    });
  }, [navigation]);
   
  }
 
  useEffect(() => {
      const getJobsInfo = async () => { 
      setLoading(true) 
     const jobsDatas = await  getJobsData()
     await addJobsData(jobsDatas)
     setTimeout(() => {
       setLoading(false)
     }, 100);
  }
  getJobsInfo()
  }, [navigation])

  return (
  

    <Container>
      <MyFlatList

        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => {
          return item.jobId;
        }}
        data={jobsData}
        renderItem={({ item }) => (
          
          <JobCard
            loading={loading}
            key={item.jobId}
            title={item.title}
            imageUrl={item.imageUrl}
            requirements={item.requirements}
            companyName={item.company.name}
            reportTo={item.company.reportTo}
            location={item.company.address.formattedAddress}
            miles={item.milesDistance}
            rate={item.wagePerHour / 100}
            shift={item.shifts}
            jobId={item.jobId}
            
          />
        )}
      />
    </Container>

  
  )
}

export default Jobs;