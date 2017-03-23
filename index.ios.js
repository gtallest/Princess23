/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import { Princess23 } from './src/app/Princess23'

const Main = () => (<Princess23 />)


AppRegistry.registerComponent('Princess23', () => Main);
