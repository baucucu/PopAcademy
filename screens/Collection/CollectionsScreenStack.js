import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CollectionsScreen from './CollectionsScreen';
import CollectionScreen from './CollectionScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


const ScreenStack = createStackNavigator();

export default function CollectionsScreenStack() {
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
      <ScreenStack.Screen name="Collections" component={CollectionsScreen}/>
      <ScreenStack.Screen name="Collection" component={CollectionScreen}/>
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
