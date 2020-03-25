import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import * as firebase from 'firebase';

export default function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        
        <DrawerItemList {...props} />
        <DrawerItem
          label="Sign out"
          onPress={()=>{
              firebase.auth().signOut()}
            }
        />
      </DrawerContentScrollView>
    );
  }
