import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';



export default function AcademyScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Academy Screen</Text>
      <Button title="Go to Course Details Screen" onPress={() => navigation.navigate('Course')}></Button>
    </View>
  );
}

AcademyScreen.navigationOptions = {
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
