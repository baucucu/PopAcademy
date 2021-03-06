import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-elements';

import firebase from './screens/auth/firebase';
// import firestore from '@react-native-firebase/firestore';
// import messaging from '@react-native-firebase/messaging';

import DrawerNavigator from './navigation/DrawerNavigator';
import RootNavigator from './navigation/RootNavigator'
import useLinking from './navigation/useLinking';


export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const [isAuthenticationReady, setAuthenticationReady] = React.useState(false);
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState({})
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // const saveTokenToDatabase = async (token) => {
  //   // Assume user is already signed in
  //   const userId = firebase.auth().currentUser.uid;
  //   if(!!userId) {
  //     // Add the token to the users datastore
  //     await firestore()
  //       .collection('users')
  //       .doc(userId)
  //       .update({
  //         tokens: firestore.FieldValue.arrayUnion(token),
  //       });
  //   }
  // }

  const onAuthStateChanged = (user) => {
    // console.log("user: ", user);
    setAuthenticationReady(true);
    setAuthenticated(!!user);
    setUser(user);
  }

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(onAuthStateChanged);
    // messaging()
    //   .getToken()
    //   .then(token => {
    //     return saveTokenToDatabase(token);
    //   });

    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
        
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
    // return messaging().onTokenRefresh(token=>{saveTokenToDatabase(token);});

  }, []);

  if (!isLoadingComplete  && !props.skipLoadingScreen) {
    return null;
  } else {
    
    const Stack = createStackNavigator();
    return (
      <ThemeProvider>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            <Stack.Navigator
              headerMode="none"
            >
              { !isAuthenticated ?
                <Stack.Screen name="Root" component={ RootNavigator } />  
                                :
                <Stack.Screen name="App" component={ DrawerNavigator } />  
              }
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </ThemeProvider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
