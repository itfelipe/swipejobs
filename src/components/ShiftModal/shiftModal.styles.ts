import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import size from '../../utils/size';

export const MyModal = styled(Modal)`
  margin:0px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: ${size(16)}px;
  padding-top: ${size(30)}px;
  align-items: center;
  height: 100px;
`

export const ModalButton = styled(TouchableOpacity)` 
  padding:${size(15)}px;

  
`

export const ButtonContainer = styled.View`
  width:100%;
  justify-content: center;
  align-items: center;
  margin-bottom: ${size(5)}px;
`

