import React, { useContext, useEffect, useState } from 'react';

import {  Button,  Typography} from '../../../components';

import { Container, JobContainer, MiddleContainer, LottieContainer,UpperHeaderContainer, ImageContainer, Image, LogoImage } from './home.styles';

import Lottie from 'lottie-react-native'

import getProfileData from '../../../services/request/profile';
import { Context } from '../../../context/ContextProvider';
import size from '../../../utils/size';


const Home = ({navigation}) => {

  if(navigation){
 React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false
    });
  }, [navigation]);
  }
 
   
  const [greeting, setGreeting] = useState('')
  const {addUserInfo,userInfo} = useContext(Context)
  const getUserInfo = async () =>{
    const userInfos = await getProfileData()
    addUserInfo(userInfos)
   }

 
   useEffect(() => {
    greetingMessage()
    getUserInfo()
   }, [navigation])



   const greetingMessage = () =>{
     const data = new Date()
     const hour = data.getHours()
 
     if(hour<12){
        setGreeting('Good Morning')
     }
     else if(hour >= 12 && hour <18){
        setGreeting('Good Afternoon')
     }
     else if(hour > 18){
        setGreeting('Good Night')
     }
   }
  
    const imageUri = require('../../../assets/images/jim.jpg')
    const logoUri = require('../../../assets/images/swipejobs_logo.png')
  return (
  

 
    <Container>

      <JobContainer>
        <UpperHeaderContainer>
           <ImageContainer>
             <Image source={imageUri?imageUri:null}/>
           </ImageContainer>
        </UpperHeaderContainer>

        <MiddleContainer>
          <Typography testID="myGreeting" variant="Gotham18Bold">{greeting}, {userInfo?userInfo.firstName + ' ' + userInfo.lastName:'People'}</Typography>
          <Typography style={{width:'80%', textAlign:'center'}} variant="Gotham14">Are you ready to take a job at the tap of a button?</Typography>

          <LottieContainer>
            <Lottie source={require('../../../assets/animations/search.json')} autoPlay loop />
          </LottieContainer>
        
        </MiddleContainer>

          <Button 
          testID="myButton" 
          containerStyle={{width:'60%', alignSelf:'center', marginBottom:size(16)}} 
          title="Search Jobs" 
          onPress={()=> navigation.navigate('JobsScreen')}/>

         <LogoImage source={logoUri?logoUri:null}/>

      </JobContainer>

    </Container>
   
  
  )
}

export default Home;