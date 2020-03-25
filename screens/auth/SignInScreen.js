import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';

export default function SignInScreen({navigation})  {
 
  
    const [email,setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const onLoginPress = () => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then (()=>{}
        ,(error) => {
          Alert.alert(error.message);
        }
        )
    };
    const onCreateAccountPress = () => {
      navigation.reset({
        routes:[{name: 'SignUp'}]
      });
    };
    const onForgotPasswordPress = () => {
      navigation.reset({
        routes:[{name:'ForgotPassword'}]
      })
    };
    const onSignInWithFbPress = () => {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.setCustomParameters({
        'display' : 'popup'
      });
      firebase.auth().signInWithRedirect(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        Alert.alert(error.message)
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }

    return (
      <View style={styles.container}>
          
          <Input 
            label = "Email"
            placeholder="Enter your email address"
            onChangeText={email => setEmail(email)}
            value={email}

            placeholderTextColor="mediumaquamarine"
            inputStyle={{color: "ivory", fontSize: 13, fontWeight:'normal'}}
            labelStyle={{color: 'ivory'}}
            containerStyle={{marginBottom: 20}}
            
          />
          <Input 
            label = "Password"
            placeholder="Enter your password"
            onChangeText={password => setPassword(password)}
            value={password}
            
            secureTextEntry={true}
            placeholderTextColor="mediumaquamarine"
            inputStyle={{color: "ivory", fontSize: 13, fontWeight:'normal'}}
            labelStyle={{color: 'ivory'}}
            containerStyle={{marginBottom: 20}}
            
          />
          <Button 
            title="Login" 
            onPress={onLoginPress}

            type="solid"
            buttonStyle={{backgroundColor:'mediumaquamarine', marginBottom: 20, marginHorizontal: 10}}
            titleStyle={{color:'black'}}
          />
          <Button 
            title="Forgot password?"  
            onPress={onForgotPasswordPress}
            
            type='clear'
            titleStyle={{color:'ivory', fontSize: 13, marginBottom: 20, marginHorizontal: 10}}               
          />
          <Button 
            title="Sign in with Facebook"  
            onPress={onSignInWithFbPress}
            
            titleStyle={{color:'ivory', fontSize: 13, marginBottom: 20, marginHorizontal: 10}}
            type='clear'
          />
          <Button 
            title="Don't have an account? Sign up here"  
            onPress={onCreateAccountPress}
            
            titleStyle={{color:'ivory', fontSize: 13, marginBottom: 20, marginHorizontal: 10}}
            type='clear'
          />
          
        </View>
        
          
        
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%%',
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#000',
    paddingHorizontal: 20
  }
});
