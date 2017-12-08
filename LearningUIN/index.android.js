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
  TextInput,
  Button,
  View,
  TouchableOpacity
} from 'react-native';

import Index from './apps/Index'

export default class LearningUIN extends Component {
  render() {
    return (
      <Index/>
    );
  }
}



AppRegistry.registerComponent('LearningUIN', () => LearningUIN);
