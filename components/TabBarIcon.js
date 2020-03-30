import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={24}
      style={{ marginBottom: -3 , marginTop: 10}}
      color={props.focused ? Colors.tabIconSelected : Colors.inactiveTintColor}
    />
  );
}
