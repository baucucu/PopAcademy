import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';



export default function ShopScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Shop Screen</Text>
      <Button title="Go to Product Screen" onPress={() => navigation.navigate('Product')}></Button>
    </View>
  );
}

ShopScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
});
