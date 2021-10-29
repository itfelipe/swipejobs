import React from 'react'
import { Container} from './button.styles'

import color from '../../themes/themes';
import { ActivityIndicator, TouchableOpacityProps, ViewStyle } from 'react-native'
import  Typography  from '../Typography';

interface ButtonProps extends TouchableOpacityProps {
  title:string;
  outlined?:boolean;
  onPress:()=>void;
  containerStyle?:ViewStyle;
  loading:boolean;
}

const Button = (props:ButtonProps) => {

  const { title, outlined,containerStyle, onPress,loading} = props
  
  let outlinedStyle: ViewStyle;
  outlinedStyle = {};
  
  if (outlined) {
    outlinedStyle = {
      borderColor: color.primary,
      borderWidth: 2,
      backgroundColor: 'transparent',
    };
  }

  return (
    
    <Container onPress={onPress} style={{...outlinedStyle, ...containerStyle}} activeOpacity={0.5}>
        {loading
        ?<ActivityIndicator size={24} color={color.oliveGreen}/>
        :<Typography testID='buttonText' style={{paddingTop:0}} variant='Gotham18' color={outlined?'primary':'white'}>{title}</Typography>
        
          }
    </Container>
    
  )
}

export default Button;