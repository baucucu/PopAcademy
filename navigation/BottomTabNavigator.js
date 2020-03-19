import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import AcademyScreenStack from '../screens/AcademyScreenStack';
import CollectionsScreenStack from '../screens/CollectionsScreenStack';
import SalonScreenStack from '../screens/SalonScreenStack';
import ShopScreenStack from '../screens/ShopScreenStack';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors.js';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Academy';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ 
    headerTitle: getHeaderTitle(route),
  });

  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: Colors.tintColor,
        inactiveTintColor: Colors.inactiveTintColor,
        style: {
          backgroundColor: "#000",
          borderTopColor: "transparent"
        }
      }}

    >
      <BottomTab.Screen
        name="Academy"
        component={AcademyScreenStack}
        options={{
          title: 'Academy',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-school" />,
        }}
      />
      <BottomTab.Screen
        name="Collections"
        component={CollectionsScreenStack}
        options={{
          title: 'Collections',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-eye" />,
        }}
      />
      <BottomTab.Screen
        name="Shop"
        component={ShopScreenStack}
        options={{
          title: 'Shop',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-cart" />,
        }}
      />
      <BottomTab.Screen
        name="Salon"
        component={SalonScreenStack}
        options={{
          title: 'Salon',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-cut" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Academy':
      return 'Academy';
    case 'Collections':
      return 'Collections';
    case 'Shop':
      return 'Shop';
    case 'Salon':
      return 'Salon';
  }
}
