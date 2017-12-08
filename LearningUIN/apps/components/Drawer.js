/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


export var Drawer = (
  <View style={{flex: 1}} >
      <View style={{
        alignItems: 'center',
        backgroundColor: '#229933',
        justifyContent: 'center',
        height: 256}}>
        <Image
        style={{height:150,
        width:100}} 
        source={require('./src/foto.jpg')} />
        <Text style={{fontSize: 25,
        color: 'white',
        margin: 10}}>
          Ajie Dwihastadi
        </Text>
        <Text style={{fontSize: 20,
        color: 'white'}}>
          {this.props.NIM}
        </Text>
      </View>
      <View style={{
        alignItems: 'flex-start',
        padding:10,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        flex: 1}}>
        <Text>
          hayy
        </Text>
      </View>
    </View>
    
)




