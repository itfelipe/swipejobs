
import 'react-native';
import React from 'react';
import Home from '../src/screens/app/Home/Home';

// Note: test renderer must be required after react-native.
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

