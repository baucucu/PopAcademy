import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainNavigator from './MainNavigator';
import EventsScreen from '../screens/Academy/EventsScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';


const INITIAL_ROUTE_NAME = 'App';
const routes = {
    App: {screen: MainNavigator}
}

const drawerContentOptions = {
    activeTintColor:'black',
    activeBackgroundColor: "silver",
    inactiveTintColor: "white",
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({navigation, route}) {
    return(
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props}/>}
            drawerContentOptions={drawerContentOptions}
        >
            <Drawer.Screen name="App" drawerLabel="App" component={MainNavigator}/>
            <Drawer.Screen name="Cursuri" drawerLabel="Cursuri" component={EventsScreen}/>
            

        </Drawer.Navigator>
    )   
}