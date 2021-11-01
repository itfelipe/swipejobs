import React, { useState } from 'react'
import { ButtonIcon, Container,LeftContainer, RightContainer } from './jobInfo.styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import  Typography  from '../Typography'
import  ShiftModal  from '../ShiftModal'
import formatData from '../../utils/formatData'


interface JobInfoProps {
  title:string;
  description:string | [];
  requirements:[string];
  icon:string;
  loading:boolean;
  miles?:number;
  shift:[];
  onPress:()=>void;
  visible:boolean;
}

const JobInfo = (props:JobInfoProps) => {

  const { title, description,icon,miles,onPress,visible,requirements } = props
  
  console.log(description)
  return (
   
    <Container onPress={onPress} activeOpacity={0.5}>
      <>
      <LeftContainer>
        <Icon name={icon} size={30} color="#000000"/>
      </LeftContainer>

      <RightContainer >

        <Typography variant='Gotham16Bold' >{title}</Typography>

        {icon==='calendar-month' && description &&
        description.map((item,index)=> 
        index < 2 && (
        <Typography key={index} variant='Gotham12'>{formatData({startDate:item.startDate,endDate:item.endDate})}</Typography>)
        )}

        {icon === 'map-marker' && 
        <Typography variant='Gotham12'>{miles} miles from your job location</Typography>
        }

        {icon==='tools' && requirements.map((item,index)=> 
        (
        <Typography key={index} variant='Gotham12'> - {item} </Typography>
        ))}

        {icon==='account-circle' && <Typography variant='Gotham12'>{description} </Typography>}

      </RightContainer>
    </>
      {icon === 'map-marker' && 

      <ButtonIcon activeOpacity={0.5}>
        <SimpleIcon name='arrow-right' size={30} color="#000000"/>
      </ButtonIcon>

      }
     <ShiftModal 
     shifts={icon==='calendar-month' && description ? description: null} 
     visible={visible} 
     modalHandler={onPress}/>
    </Container>
    
  
  )
}

export default JobInfo;
