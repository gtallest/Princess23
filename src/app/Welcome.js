import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'

import { styles } from './styles'
import { FadeInView } from './FadeInView'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const myIcon = (<Icon name="cake" size={30} color="#900" />)
const past = (<Icon name="format-horizontal-align-left" size={30} color="white" />)
const future = (<Icon name="clock-fast" size={30} color="white" />)
const crown = require('../../assets/images/Crown-23-large-red.png')


export class Welcome extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <LinearGradient colors={["#ffd1dc", "#ff85a2"]} style={styles.container} >
        <Image source={crown} style={styles.crownImage} />
          <FadeInView fadeDuration={500} fadeDelay={0}>
            <Text style={styles.welcome}>
              Hi Princess.{'\n'}
              Happy 23rd Birthday!{'\n'}
              {myIcon}
            </Text>
          </FadeInView>
          <FadeInView fadeDuration={500} fadeDelay={500}>
            <Text style={styles.tripMessage}>
              {'\n'}
              Let's take a trip into the past,{past}{'\n'} and also to the future.{future}{'\n'}
            </Text>
          </FadeInView>
          <FadeInView fadeDuration={500} fadeDelay={1300}>
            <Text style={styles.pressStart}>

            </Text>
            <TouchableHighlight style={styles.startButton} onPress={this.props.startApp}>
              <Text style={styles.startButtonText}>
                START
              </Text>
            </TouchableHighlight>
          </FadeInView>
        </LinearGradient>
    )
  }
}
