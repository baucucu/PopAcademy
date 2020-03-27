// import React from 'react';
import {Alert} from 'react-native';
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';



export default  Login = 
  {
    onLoginPress: (email, password) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then (()=>{}
        ,(error) => {
          Alert.alert(error.message);
        });
    },
    onLoginWitGooglePress: async() => {
      const isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
              // We don't need to reauth the Firebase connection.
              return true;
            }
          }
        }
        return false;
      }
      
      const onGoogleSignIn = async (googleUser) => {
        // console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
          unsubscribe();
          // Check if we are already signed-in Firebase with the correct user.
          if (!isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            var credential = firebase.auth.GoogleAuthProvider.credential(
              googleUser.idToken,
              googleUser.accessToken    
            );
            // Sign in with credential from the Google user.
            firebase.auth().signInWithCredential(credential)
            .then(() => {console.log('user signed in')})
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
          } else {
            console.log('User already signed-in Firebase.');
          }
        });
      }

      try {
        const GoogleClientID = Expo.Constants.manifest.extra.google.clientID;
        const GooglePermissions = ['profile', 'email'];
        const result = await Google.logInAsync({
          // androidClientId: YOUR_CLIENT_ID_HERE,
          iosClientId: GoogleClientID,
          scopes: GooglePermissions,
        }).catch(error => {Alert.alert(error.message); console.log(error.message)});
        if (result.type === 'success') {
          const token = result.accessToken;
          onGoogleSignIn(result);
        } else {
          console.log("Facebook")
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    },
    onLoginWithFbPress: async ()=> {
      const FBappId = Expo.Constants.manifest.extra.facebook.appId;
      const FBpermissions = ['public_profile', 'email'];
      Facebook.initializeAsync(FBappId);
      const {
        type,
        token
      } = await Facebook.logInWithReadPermissionsAsync(
        FBappId,
        {FBpermissions}
      )
  
      switch(type) {
        case 'success': {
          await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
          await firebase.auth().signInWithCredential(credential).catch(error => {Alert.alert(error.message)});
  
          return Promise.resolve({type: 'success'});
        }
        case 'cancel': {
          return Promise.reject({type: 'cancel'});
        }
      }
    }
  }



