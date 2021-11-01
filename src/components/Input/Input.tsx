import React from 'react';
import { View, ViewStyle } from 'react-native';
import  Typography  from '../Typography';
import  SeparationLine  from '../SeparationLine';
import { InputText,Container } from './input.styles';

interface InputProps {
  label:string;
  style?:ViewStyle;
  placeholder:string;
}
const Input = (props:InputProps) => {

  const {label,style,placeholder} = props;

  return (
    <Container style={style}>
      <Typography variant="Gotham12">{label}</Typography>

    <InputText 
    placeholder={placeholder}
    placeholderTextColor='rgba(0,0,0,0.5)'
    />
    
    <SeparationLine styles={{backgroundColor:'black', width:'100%'}}/>
    </Container>
    
    );
}

export default Input;