import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import AcademyScreen from './AcademyScreen';
import CourseScreen from './CourseScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import MenuButton from '../components/MenuButton';


const ScreenStack = createStackNavigator();

export default function AcademyScreenStack({navigation}) {

  return (
    <ScreenStack.Navigator
      screenOptions={ ({navigation}) => ({
        headerStyle:{
          backgroundColor: "black",
          shadowColor: 'transparent'
        },
        headerTitleStyle:{color: "white"},
        headerRightContainerStyle: {paddingRight:8},
        headerRight: () => (<Ionicons size={32} name="ios-menu" color="white" onPress={() => navigation.toggleDrawer()}/>),
      })}
    >
      <ScreenStack.Screen name="Academy" component={AcademyScreen}/>
      <ScreenStack.Screen name="Course" component={CourseScreen}/>
    </ScreenStack.Navigator>
  );
}


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: "center",
  //   justifyContent: "center"
  // }
});
