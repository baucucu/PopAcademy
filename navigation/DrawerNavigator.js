import React, { Button, View } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainNavigator from './MainNavigator';
import CustomDrawerContent from '../components/CustomDrawerContent';


const INITIAL_ROUTE_NAME = 'App';
const routes = {
    App: {screen: MainNavigator}
}
const drawerStyle = {
    backgroundColor: '#C0C0C0',
    width: 240,
};
const drawerContentOptions = {
    activeTintColor:'white',
    activeBackgroundColor: "black",
    inactiveTintColor: "black"
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({navigation, route}) {
    return(
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props}/>}
        >
            <Drawer.Screen name="App" drawerLabel="App" component={MainNavigator}/>
            

        </Drawer.Navigator>
    )   
}