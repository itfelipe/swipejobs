import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../screens/app/Home/Home';
import Jobs from '../screens/app/Jobs/Jobs';

// TabBar

const Stack = createNativeStackNavigator();




const AppNavigator = () => {


  const headerOptions = {
     headerStyle: {
          backgroundColor: '#ffffff',
          elevation: 0, // remove white line shadow on Android
          shadowOpacity: 0, // remove white line shadow on iOS
          height: 80,
        },
        headerTitleStyle: {
          color: 'transparent',
        },
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerTitleAlign: 'center',
      
  }



  return (
   
    <Stack.Navigator
      screenOptions={{
            animation: 'slide_from_right',
            
          }}
      initialRouteName='HomeScreen'
    >
      <Stack.Screen name='HomeScreen' component={Home}
      options={headerOptions} />
      <Stack.Screen name='JobsScreen' component={Jobs}
      options={headerOptions} />
      {/* <Stack.Screen
        name='DisciplineDetailsScreen'
        component={DisciplineDetail}
        options={headerOptions}
      /> */}
      
    </Stack.Navigator>
    
  );
};

export default AppNavigator;
