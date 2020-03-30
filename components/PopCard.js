import * as React from 'react';
import {View, Image,Text, StyleSheet} from 'react-native'


export default function PopCard(props) {
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ marginBottom:20,backgroundColor: "#111", borderRadius: 10, overflow: 'hidden' }}>
          <View style={{ height:props.height, width: 360, overflow: 'hidden' }}>
            <Image
              source={{uri: props.uri}}
              style={{
                width: "100%",
                height: "100%"
              }}
            />
          </View>
          <View style={{ padding: 10 }}>
            {props.title ? <Text style={{ color: "#eee"}}>{props.title}</Text> : null}
            {props.subtitle ? <Text style={{ color: "#aaa", paddingTop: 5 }}>{props.subtitle} EUR</Text> : null}
          </View>
        </View>
      </View>
    )
  }

  const styles= StyleSheet.create({
    
    imageView: {
   
      width: '50%',
      height: 100 ,
      // margin: 7,
      borderRadius : 7
   
    },
  })