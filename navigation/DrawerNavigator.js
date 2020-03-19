import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AuthScreenStack from '../screens/AuthScreenStack';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'App';

export default function DrawerNavigator({navigation, route}) {
    return(
        <Drawer.Navigator
            drawerStyle={{
                backgroundColor: '#C0C0C0',
                width: 240,
            }}
            drawerContentOptions={{
                activeTintColor:'white',
                activeBackgroundColor: "black",
                inactiveTintColor: "black"
            }}
        >
            <Drawer.Screen name="App" drawerLabel="Close" component={BottomTabNavigator}/>
            <Drawer.Screen name="Sign in" component={AuthScreenStack}/>
        </Drawer.Navigator>
    )   
}