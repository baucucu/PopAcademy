import * as React from 'react';
import { ActivityIndicator, Animated,SafeAreaView, ScrollView, StyleSheet,  Text, View,} from 'react-native';
import PopCard from '../../components/PopCard.js';
import extractUrl from '../../helper-functions/extractUrl.js'

import axios from 'axios';

const url = 'https://alexandruraduca.wixsite.com/popacademy/_functions/api/Colectie';

export default function CollectionsScreen({navigation}) {

  const [isLoading, setLoading] = React.useState(true);
  const [colectie, setColectie] = React.useState([]);
  scrollAnimatedValue = new Animated.Value(0);
  
  React.useEffect(() => {
    
    async function fetchData() {
      
      const result = await axios(url,)
        .catch(error => console.log(error))

        result.data.items.map((item, index) => {
          result.data.items[index].uri = extractUrl(item.image)
        })
        
        setColectie(result.data.items)
        setLoading(false)
    }

    fetchData();
    
  }, []);

  return (
    <View style={styles.container}>
      { !isLoading ? 
        <SafeAreaView >
          <ScrollView
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollAnimatedValue }} }],
            )}
            scrollEventThrottle={8}
          >
            {colectie.map( (colectie, index) => 
            
              <PopCard key={index} title={colectie.titlu} uri={colectie.uri} subtitle={colectie.pret} height={140}/>

            )}
          </ScrollView>
        </SafeAreaView>
        
        : 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>Loading Colectii...</Text>
          <ActivityIndicator size="large" style={{marginTop: 20}}/>
        </View>
        
      }
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
