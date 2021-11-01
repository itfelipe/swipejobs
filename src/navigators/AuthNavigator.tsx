import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login/Login';

// Screens

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  const options = {
    headerShown: true,
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTitleStyle: {
      color: 'transparent',
    },
    headerTitleAlign: 'center',
    headerBackVisible: false,
    animation: 'slide_from_right',
    headerShadowVisible: false,
    headerTintColor: 'transparent',
  };

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
      initialRouteName='LoginScreen'
    >
      <Stack.Screen name='LoginScreen' component={Login} />
      
    </Stack.Navigator>
  );
};

export default AuthNavigator;
