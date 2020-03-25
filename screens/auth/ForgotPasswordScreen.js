import React, {Component} from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';

export default function ForgotPasswordScreen({navigation})  {
 
  
    const [email,setEmail] = React.useState('');
    const onSignInPress = () => {
      navigation.reset({
        routes:[{name: 'Login'}]
      });
    };
    const onPasswordResetPress = () => {
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          Alert.alert("Password reset email has been sent");
        }, (error) => {
          Alert.alert(error.message);
        });
    }

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input 
              placeholder="Enter your email address"
              label = "Email"
              value={email}
              onChangeText={email => setEmail(email)}

              inputStyle={{color: "ivory", fontSize: 13, fontWeight:'normal'}}
              labelStyle={{color: 'ivory'}}
              placeholderTextColor="tomato"
              containerStyle={{marginBottom: 20}}
            
            />
          
            <Button 
              title="Reset password" 
              onPress={onPasswordResetPress}

              type="solid"
              buttonStyle={{backgroundColor:'tomato', marginBottom: 20, marginHorizontal: 10}}
              titleStyle={{color:'black'}}
            />
            <Button 
              title="Back to Login"  
              onPress={onSignInPress}
              
              type='clear'
              titleStyle={{color:'ivory' ,fontSize: 13, marginBottom: 20, marginHorizontal: 10}}               
            />
        </View>
      </View>
    );
}
  

ForgotPasswordScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white"
  },
  inputContainer: {
    width: "100%",
    padding: 20
  }
});
