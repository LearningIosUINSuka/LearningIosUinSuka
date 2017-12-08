'use strict';

import React, { Component } from 'react';
import {
StyleSheet,
ToolbarAndroid
} from 'react-native';


export default class Toolbar extends Component {
    
    render() {
    var navigator = this.props.navigator;
    return (
        <ToolbarAndroid style={styles.toolbar} 
        title="E-learning"
        titleColor="black"
        navIcon={require('./src/menu.png')}
        onIconClicked={this.props.sidebarRef}
        />
        );
    }
}

    

const styles = StyleSheet.create({
    toolbar: {
      backgroundColor: '#fff',
      height: 56,
    },
  });