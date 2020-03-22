import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function CollectionsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Collections Screen</Text>
      <Button title="Go to Collections Details Screen" onPress={() => navigation.navigate('Collection')}></Button>

    </View>
  );
}

// CollectionsScreen.navigationOptions = {
//   header: null,
// };

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
