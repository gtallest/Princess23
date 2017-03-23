import React, { Component } from 'react'
import {
  Animated,
  View,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Switch
} from 'react-native'
import { styles } from './styles'
import { FadeInView } from './FadeInView'
import { CustomTabBar } from './CustomTabBar'
import Movies from './Movies'
import Shopping from './Shopping'
import Home from './Home'
import Dogs from './Dogs'
import Food from './Food'
import LinearGradient from 'react-native-linear-gradient'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const myIcon = (<Icon name="cake" size={30} color="#900" />)
const myIconLabel = `${myIcon}`
const crown = require('../../assets/images/Crown-23-large-red.png')

export class Princess23 extends Component {
  constructor () {
    super()
  }


  render() {
    return (
      <LinearGradient
      colors={["#ffd1dc", "#ff85a2"]}
      style={styles.container}>
      <ScrollableTabView
        tabBarTextStyle={{ color: 'white' }}
        tabBarUnderlineStyle={{ backgroundColor: 'white' }}
        tabBarPosition="overlayBottom"
        ref={(tabView) => {this.tabView = tabView }}
        renderTabBar={() => <CustomTabBar
                tabBarTextStyle={{ color: 'white' }}
                tabBarUnderlineStyle={{ backgroundColor: 'white' }}
                tabBarPosition="overlayBottom"
        />}
      >
        <Movies tabLabel="clapperboard" style={styles.container} />
        <Shopping tabLabel="shopping-bag" />
        <Home tabLabel="home" />
        <Dogs tabLabel="baidu" />
        <Food tabLabel="yelp" />

        </ScrollableTabView>
      </LinearGradient>

    );
  }
}
