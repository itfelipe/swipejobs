import React, { useContext, useState } from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';


import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { Context } from '../context/ContextProvider';

const Navigators = () => {
 

  const Stack = createNativeStackNavigator();
  const {logged} = useContext(Context)  
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000000' />
      <NavigationContainer >
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
            
          }}
        >
          {logged? 
           <Stack.Screen
              name='App'
              component={AppNavigator}
              options={{
                animationTypeForReplace: 'push',
                headerShown: false,
              }}
            />
            
            :
        
            <Stack.Screen
              name='Auth'
              component={AuthNavigator}
              options={{
                animationTypeForReplace: 'push',
                headerShown: false,
              }}
            />
        }
           
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigators;
