import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import SalonScreen from './SalonScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


const ScreenStack = createStackNavigator();

export default function SalonScreenStack({navigation}) {

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
      <ScreenStack.Screen name="Salon" component={SalonScreen}/>
      {/* <ScreenStack.Screen name="Product" component={ProductScreen}/> */}
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
