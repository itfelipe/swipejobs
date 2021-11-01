
import 'react-native';
import React from 'react';
import Home from '../src/screens/app/Home/Home';
import {render} from '@testing-library/react-native';

jest.useFakeTimers();

it('should find the button via text', () => {

    const {getByText}= render(<Home />);
  
    const searchJobsButton = getByText('Search Jobs')
});

it('should find the greeting', () => {

    const {getByTestId}= render(<Home />);
  
    const searchJobsButton = getByTestId('myGreeting')
});

it('should find the image', () => {

    const {getByTestId}= render(<Home />);
  
    const image = getByTestId('image')
});
