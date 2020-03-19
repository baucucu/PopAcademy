import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

// import Colors from '../constants/Colors';

export default function MenuButton(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color= "white"
      onPress={()=> props.navigation.navigate("Shop")}
    />
  );
}
