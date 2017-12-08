/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  View,
  Alert,
  TouchableOpacity
} from 'react-native';

import {Stack} from './Router'

export default class Login extends Component {

    constructor(){
        super()
        this.state={
            NIM:'',
        }
    }
    redirectHome(){
        this.props.navigation.navigate('Home', {data:this.state})
    }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./components/src/UIN.png')}/>
      	<View style={styles.form}>
	      	<TextInput 
                underlineColorAndroid='transparent'
                onChangeText={(text) => {this.setState({NIM:text})}}
                returnKeyType='next'
                style={styles.input}
                placeholder="Username"
                keyboardType='numeric'
	      	/>
	      	<TextInput underlineColorAndroid='transparent'
                secureTextEntry={true}
                style={styles.input}
                onChangeText={(text) => {this.setState({Password:text})}}
                placeholder="Password"
	      	/>
	      	<TouchableOpacity onPress={() => {this.redirectHome()}} >
                <View 
                    style = {styles.button} >
                    
                    <Text style = {{color: 'white'}}>Login</Text>
                </View>
            </TouchableOpacity>
      	</View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  form: {
  	height:200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius: 10
  },
  input: {
    height: 40, 
    width: 300,
    alignItems: 'center', 
    paddingLeft: 10, 
    fontSize: 20, borderWidth:1, 
    borderColor: 'gray', 
    margin: 10,
    backgroundColor: 'white'
  },
  button: {
  	backgroundColor: '#222', alignItems: 'center',
    justifyContent: 'center', width: 300, height: 40,
    flexDirection:'row'
  },
  logo:{
    height:125,
    width:100
  }
});

