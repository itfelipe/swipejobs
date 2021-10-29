import React from 'react';
import Button from '../Button';
import formatData from '../../utils/formatData';
import  Typography from '../Typography';

import {
  ModalButton,
  ButtonContainer,
  MyModal,
} from './shiftModal.styles';

interface ModalProps {
  visible: boolean;
  modalHandler: () => void;
  shifts:[{}];
}

const ShiftModal = (props: ModalProps) => {
  const { visible, modalHandler,shifts } = props;
  
  return (
    <>
      <MyModal
        animationIn='slideInDown'
        isVisible={visible}
        backdropOpacity={0.8}
        focusable={true}
        onBackdropPress={modalHandler}
        swipeDirection={['up','down','left','right']}
        onSwipeComplete={modalHandler}
        style={{
          height: '50%',
          marginTop: '16%',
          justifyContent: 'flex-start',
        }}
      >
        {shifts &&
        <>
        {shifts.map((item,index)=> (

        <ButtonContainer key={index}>
          <ModalButton onPress={() => {}}>
            <Typography variant='Gotham16' color={'white'}>{formatData({startDate:item.startDate,endDate:item.endDate})}</Typography>
          </ModalButton>
        </ButtonContainer>
        ))}
        </>
        }
        <Button containerStyle={{width:'50%'}} title="Close" outlined onPress={modalHandler}/>
       
      </MyModal>
    </>
  );
};

export default ShiftModal;
