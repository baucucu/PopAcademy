import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import * as firebase from 'firebase';



export default function CustomDrawerContent(props) {
  const user = firebase.auth().currentUser;
  // console.log(user);
  return (
    <DrawerContentScrollView 
      {...props} 
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.headerProfile}>
          <Image 
            source={user.photoUrl ? {uri: user.photoUrl} :require("../assets/images/popLogo.jpg")}
            // source={{uri: user.photoURL ? user.photoURL : require("../assets/images/popLogo.jpg")}
            minWidth={44}
            maxWidth={44}
            minHeight={44}
            maxHeight={44}
            borderRadius={100}
            
          />
          <Text 
            size={32} 
            style={{color: "white", paddingLeft:20, fontSize:18}}
          >
            {user.displayName ? user.displayName : "Unverified user"}
          </Text>
        </View>
        

      </View>
      <View style={styles.menu}>
        {/* <Text style={styles.text}>Menu</Text> */}
        <DrawerItemList {...props} />
      </View>
      <View style={styles.footer}>
        {/* <Text style={styles.text}>Footer</Text> */}
        <DrawerItem
          style={{backgroundColor:"transparent", borderColor:'silver', borderWidth:0.5}}
          labelStyle={{color:"silver", textAlign:"center"}}
          label="Sign out"
          onPress={()=>{
              firebase.auth().signOut()}
            }
        />
      </View>
      
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection:"column",
    alignItems:"stretch",
    
    minHeight:'100%',
    backgroundColor:"black"
  },
  header: {
    display:"flex",
    flexShrink:0,
    minHeight:"20%",
    backgroundColor: "black",
    borderBottomWidth: 0.17,
    borderBottomColor: "white"
  },
  headerProfile:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "center"

  },
  menu: {
    flexGrow: 1,
    paddingTop:30,
    // backgroundColor: "tomato"
  },
  footer: {
    flexShrink:0,
    minHeight: '15%',
    // backgroundColor: "blue"
  },
  text: {
    color: "white"
  }
})
