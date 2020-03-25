import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';

export default function SignUpScreen({navigation})  {
 
  
    const [email,setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
    const onSignUpPress = () => {
      if(password == passwordConfirmation) {
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(()=>{
          
          }, (error)=> {
            Alert.alert(error.message);
          });
      } else {
        Alert.alert("Password doesn\'t match")
      }
    };
    const onLoginPress = () => {
      navigation.reset({
        routes:[{name: 'Login'}]
      });
    };

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <Input 
            label = "Email"
            placeholder="Enter your email address"
            onChangeText={email => setEmail(email)}
            value={email}

            placeholderTextColor="mediumaquamarine"
            inputStyle={{color: "white", fontSize: 13, fontWeight:'normal'}}
            labelStyle={{color: '#cccccc'}}
            containerStyle={{marginBottom: 20}}
          />
            <Input 
              label = "Password"
              placeholder="Enter your password"
              onChangeText={password => setPassword(password)}
              value={password}

              secureTextEntry={true}
              placeholderTextColor="mediumaquamarine"
              inputStyle={{color: "white", fontSize: 13, fontWeight:'normal'}}
              labelStyle={{color: '#cccccc'}}
              containerStyle={{marginBottom: 20}}
            />
            <Input 
              label = "Password confirmation"
              placeholder="Enter your password again"
              onChangeText={passwordConfirmation => setPasswordConfirmation(passwordConfirmation)}
              value={passwordConfirmation}

              secureTextEntry={true}
              placeholderTextColor="mediumaquamarine"
              inputStyle={{color: "white", fontSize: 13, fontWeight:'normal'}}
              labelStyle={{color: '#cccccc'}}
              containerStyle={{marginBottom: 20}}
            />
            <Button 
              title="Sign up" 
              onPress={onSignUpPress}

              type="solid"
              buttonStyle={{backgroundColor:'mediumaquamarine', marginBottom: 20, marginHorizontal: 10}}
              titleStyle={{color:'black'}}
            />
            <Button 
              title="Already have an account? Log in here" 
              subtitle="Go to Login" 
              onPress={onLoginPress}

              type="clear"
              buttonStyle={{}}
              titleStyle={{color:'white', fontSize: 13, marginHorizontal: 10}}
            />
        </View>
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
