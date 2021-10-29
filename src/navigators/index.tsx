import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';


import App from './AppNavigator';

const Navigators = () => {
 

  const Stack = createNativeStackNavigator();

  
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000000' />
      <NavigationContainer >
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
            
          }}
        >
            <Stack.Screen
              name='App'
              component={App}
              options={{
                animationTypeForReplace: 'push',
                headerShown: false,
              }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigators;
