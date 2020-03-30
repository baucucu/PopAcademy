import * as React from 'react';
import { ActivityIndicator, Animated,SafeAreaView, ScrollView, StyleSheet,  Text, View,} from 'react-native';
import PopCard from '../../components/PopCard.js';
import extractUrl from '../../helper-functions/extractUrl.js'
import axios from 'axios';

const url = 'https://alexandruraduca.wixsite.com/popacademy/_functions/api/Cursuri';




export default function AcademyScreen({navigation}) {


  const [isLoading, setLoading] = React.useState(true);
  const [cursuri, setCursuri] = React.useState([]);
  scrollAnimatedValue = new Animated.Value(0);
  
  React.useEffect(() => {
    
    async function fetchData() {
      
      const result = await axios(url,)
        .catch(error => console.log(error))

        result.data.items.map((item, index) => {
          result.data.items[index].uri = extractUrl(item.imagine)
        })
        
        setCursuri(result.data.items)
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
            {cursuri.map( (curs, index) => 
            
              <PopCard key={index} title={curs.titlu} uri={curs.uri} subtitle={curs.pret} height={200}/>

            )}
          </ScrollView>
        </SafeAreaView>
        
        : 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>Loading Cursuri...</Text>
          <ActivityIndicator size="large" style={{marginTop: 20}}/>
        </View>
        
      }
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
    alignItems: "stretch",
    justifyContent: "center",
    width: '100%'
  },
  text: {
    color: "white"
  },
  list: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerStyle: {
    flex:1,
    marginLeft:10,
    // marginTop: 30, 
    marginBottom: 10, 
    // borderRadius: 10, // adds the rounded corners
    borderColor: "white",
    backgroundColor: '#333' ,
    width: '95%'
  },
  titleStyle: {
    color: "white", fontSize: 13, fontWeight:'normal', marginBottom:10
  }
});
