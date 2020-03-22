import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import ShopScreen from './ShopScreen';
import ProductScreen from './ProductScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


const ScreenStack = createStackNavigator();

export default function ShopScreenStack({navigation}) {

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
      <ScreenStack.Screen name="Shop" component={ShopScreen}/>
      <ScreenStack.Screen name="Product" component={ProductScreen}/>
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
