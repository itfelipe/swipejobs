
import 'react-native';
import React from 'react';
import { JobCard } from '../src/components';
// Note: test renderer must be required after react-native.
import {render,fireEvent} from '@testing-library/react-native';

jest.useFakeTimers();

it('should shown reject alert when press on reject button', () => {

    const {getByText}= render(<JobCard />);

    const rejectButton = getByText('No Thanks')
  
    fireEvent.press(rejectButton)

    
});

it('should shown accept alert when press on accept button', () => {

    const {getByText}= render(<JobCard />);
  
    const acceptButton = getByText("I'll Take it")
  
    fireEvent.press(acceptButton)
    

    

});