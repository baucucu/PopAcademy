import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen.js';
// import MainNavigator from './MainNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
        headerMode='screen'
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { 
                backgroundColor: 'black',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
          }}
    >
      <Stack.Screen name="Login" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />

    </Stack.Navigator>
  );
}