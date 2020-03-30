import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Button,
} from 'react-native';

const useSwapiPeople = () => {
    const [people, setPeople] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState(1);
  
    React.useEffect(
      () => {
        setLoading(true);
        fetch(`https://alexandruraduca.wixsite.com/popacademy/_functions/api/Cursuri`)
          .then(res => {
            res.json()
            })
          .then(res => {
            console.log(res);
            setPeople([...res.items]);
            console.log(people);
            setLoading(false);
          })
          .catch(error => console.log(error))
      },
      []
    );
  
    const loadMore = () => {
      setPage(page + 1);
    };
  
    return {
      people,
      loading,
      loadMore,
    };
  };
  
  export default function Swapi() {
    const { people, loading, loadMore } = useSwapiPeople();
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={people}
          keyExtractor={item => item.priority}
          renderItem={({ item }) => (
            <View>
              <Text style={{color: 'white'}}>{item.titlu}</Text>
            </View>
          )}
          
        />
      </SafeAreaView>
    );
  };