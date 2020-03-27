import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Input, Button } from 'react-native-elements';

import Login from './firebaseAuth';

export default function SignInScreen({navigation})  {

  const [email,setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
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
        onPress={() => Login.onLoginPress(email,password)}

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
      <View style={styles.socialLoginContainer}>
        <Button 
          title="Login with Facebook"  
          onPress={Login.onLoginWithFbPress}
          
          titleStyle={{color:'ivory', fontSize: 13}}
          buttonStyle={{backgroundColor:'#3b5998', marginBottom: 20, minWidth: '45%'}}
          type='clear'
        />
        <Button 
          title="Login with Google"  
          onPress={Login.onLoginWitGooglePress}
          
          titleStyle={{color:'black', fontSize: 13}}
          buttonStyle={{backgroundColor:'ivory', marginBottom: 20, minWidth: '45%'}}
          type='clear'
        />
      </View>
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
    width: '100%',
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#000',
    paddingHorizontal: 20
  },
  socialLoginContainer: {
    marginHorizontal: 10,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
});
