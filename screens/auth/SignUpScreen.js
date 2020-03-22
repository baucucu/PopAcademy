import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Sign up Screen</Text>
    </View>
  );
}

SignUpScreen.navigationOptions = {
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
