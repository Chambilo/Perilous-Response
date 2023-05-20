import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GettingStartedScreen from './screens/gettingstarted';
import LoginScreen from './screens/login';
import SignUpScreen from './screens/signup';
import EmergencyCallScreen from './screens/emergencycall';
import HomeScreen from './screens/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GettingStarted">
        <Stack.Screen name="GettingStarted" component={GettingStartedScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="EmergencyCall" component={EmergencyCallScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};