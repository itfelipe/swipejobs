
import 'react-native';
import React from 'react';
import { JobCard } from '../src/components';
import {render,fireEvent} from '@testing-library/react-native';
import Login from '../src/screens/auth/Login/Login';
import { act } from 'react-test-renderer';

jest.useFakeTimers();

it('should find loggin button', () => {

    const {getByText}= render(<Login />);
  act(() => {
         const loginButton = getByText('LOGIN')
      });
   
 
});

it('should find email label', () => {

    const {getByText}= render(<Login />);
  
    const email = getByText("E-mail")
  
});

it('should find password label', () => {

    const {getByText}= render(<Login />);
  
    const password = getByText("Password")
  

    
});
