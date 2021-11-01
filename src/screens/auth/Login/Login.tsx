import React, { useContext, useEffect, useState } from 'react';

import {  Button,  Input,  Typography} from '../../../components';

import { Container, JobContainer, HeaderContainer, LottieContainer,UpperHeaderContainer, ImageContainer, Image, LogoImage, BottomContainer, InputContainer, KeyboardAvoidingView, MiddleContainer } from './login.styles';

import Lottie from 'lottie-react-native'

import getProfileData from '../../../services/request/profile';
import { Context } from '../../../context/ContextProvider';
import { TouchableOpacity } from 'react-native';
import size from '../../../utils/size';


const Login = ({navigation}) => {
 
  const {addUserInfo,userInfo,setLogged} = useContext(Context)
  const getUserInfo = async () =>{
    const userInfos = await getProfileData()
    addUserInfo(userInfos)
   }

   const handleLogin = () =>{
    setLogged(true)
   }

 
   useEffect(() => {
    getUserInfo()
   }, [navigation])

  
    const imageUri = require('../../../assets/images/jim.jpg')
    const logoUri = require('../../../assets/images/swipejobs_logo.png')
  return (
  
<KeyboardAvoidingView>
 
    <Container>

      <JobContainer>
        <UpperHeaderContainer>                

           <ImageContainer>
             <Image source={imageUri?imageUri:null}/>
           </ImageContainer>
           
        </UpperHeaderContainer>
        <MiddleContainer>
           <Typography variant="Gotham14" >Welcome back, {userInfo.firstName}</Typography>
        </MiddleContainer>
        <BottomContainer>

          <InputContainer>
          <Input label='E-mail' 
          placeholder='test.mail@gmail.com'
          style={{marginBottom:size(20)}}
          />

          <Input label='Password'
          placeholder='123456789'/>
         </InputContainer>

        <Button title="LOGIN" containerStyle={{width:'60%', marginBottom:size(90)}} onPress={()=>handleLogin()} />

                   <LogoImage source={logoUri?logoUri:null}/>   

            </BottomContainer>
      </JobContainer>

    </Container>
  </KeyboardAvoidingView>
   
  
  )
}

export default Login;