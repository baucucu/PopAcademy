import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../components/Input';

export default class SignInScreen extends Component {
  
  state = {
    email:'',
    password:''
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input 
              placeholder="Enter your email address"
              placeholderTextColor="white"
              label = "Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <Input 
              placeholder="Enter your password"
              placeholderTextColor="white"
              label = "Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
        </View>
      </View>
    );
  }
}
  

SignInScreen.navigationOptions = {
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
