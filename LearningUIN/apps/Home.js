/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  View,
  ToolbarAndroid,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import {Stack} from './Router'
import Toolbar from './components/Toolbar'
import Panel from './components/Panel'

export var Home = React.createClass( {

  logout(){
    this.props.navigation.navigate('Login')
  },

  render: function() {
      return(
        const {state} = this.props.navigation
        var Drawer = (
          <View style={{flex: 1}} >
            <View style={styles.drawerHeader}>
              <Image
              style={styles.photoProfile} 
              source={require('./components/src/foto.jpg')} />
              <Text style={styles.nama}>
                Ajie Dwihastadi
              </Text>
              <Text style={styles.nim}>
                {state.params.data.NIM}
              </Text>
            </View>
            <ScrollView style={styles.drawerMenu}>
              <View style={styles.drawerMenuItem}>
                <Image source={require('./components/src/ico-menu.png')} />
                <Text style={styles.menuText}> Beranda </Text>
              </View>
              <View style={styles.drawerMenuItem}>
                
                <Panel title="Mata Kuliah">
                  <Text style={styles.makul}>Komputer dan Masyarakat</Text>
                  <Text style={styles.makul}>Rekayasa Perangkat Lunak</Text>
                  <Text style={styles.makul}>Kewirausahaan</Text>
                  <Text style={styles.makul}>Jaringan Komputer</Text>
                  <Text style={styles.makul}>Sistem Informasi Management</Text>
                  <Text style={styles.makul}>Pemrograman Berorientasi Objek</Text>
                  <Text style={styles.makul}>Kecerdasan Buatan</Text>
                </Panel>
              </View>
              <View style={styles.drawerMenuItem}>
                <Image source={require('./components/src/ico-menu.png')} />
                <Text style={styles.menuText}> File Saya </Text>
              </View>
              <View style={styles.drawerMenuItem}>
                <Image source={require('./components/src/ico-menu.png')} />
                <Text style={styles.menuText}  onPress={() => {this.logout()}}> Log Out </Text>
              </View>
              
            </ScrollView>
        </View>
        )
      return (
          <DrawerLayoutAndroid 
              drawerWidth={300} 
              drawerPosition={DrawerLayoutAndroid.positions.Left} 
              renderNavigationView={() => Drawer}
              ref={'DRAWER'}
              navigator={this.props.navigator}
              sidebarRef={this}> 
              <Toolbar navigator={this.props.navigator}
              sidebarRef={()=>this.openDrawer()}/>
              <Text>{state.params.data.NIM}</Text>
          </DrawerLayoutAndroid>
      );
      )
  },
  openDrawer: function() {
    this.refs['DRAWER'].openDrawer();
   }  
    
  })




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  drawerHeader:{
    alignItems: 'flex-start',
    backgroundColor: '#eeeeee',
    justifyContent: 'flex-end',
    height: 146,
    padding: 10
  },
  photoProfile:{
    height:75,
    width:50,
  },
  nama:{fontSize: 16,
    color: 'black',
  },
  nim: {fontSize: 14,
    color: '#666',
    
  },
  drawerMenu:{
    
    padding:20,
    backgroundColor: '#ffffff',
    
    flex: 1},
  drawerMenuItem:{
    alignItems: 'center',
    flexDirection:'row',
    marginBottom: 20,
    width:300,
    justifyContent: 'flex-start'
  },
  menuText:{
    fontSize:16,
    marginLeft: 10
  },
  makul:{
    fontSize:16,
    marginBottom:14,
    marginLeft:10
  }
});

