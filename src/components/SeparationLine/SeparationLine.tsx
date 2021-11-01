import React from 'react'
import { ViewStyle } from 'react-native';
import { Container} from './separationLine.styles'

interface SeparationLineProps {
  styles?:ViewStyle
}

const SeparationLine = (props:SeparationLineProps) => {

  const {styles} = props

  return (
    <Container style={styles}/>
  )
}

export default SeparationLine;