import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// RootState
import { RootState } from '@store/ducks/rootReducer';

// Screens
import Login from '@screens/auth/Login/Login';
import ForgotPassword from '@screens/auth/ForgotPassword/ForgotPassword';
import OnBoarding from '@screens/auth/OnBoarding/OnBoarding';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  const { onBoarding } = useSelector((state: RootState) => state.auth);

  const initialScreen = !onBoarding ? 'OnboardingScreen' : 'LoginScreen';

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
      initialRouteName={initialScreen}
    >
      <Stack.Screen name='LoginScreen' component={Login} />
      <Stack.Screen name='OnboardingScreen' component={OnBoarding} />
      <Stack.Screen
        name='ForgotPasswordScreen'
        component={ForgotPassword}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
