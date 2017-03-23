import React, { Component } from 'react'
import {
  Animated,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Switch
} from 'react-native'
import { styles } from './styles'
import { FadeInView } from './FadeInView'
import LinearGradient from 'react-native-linear-gradient'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="heartbeat" size={30} color="#900" />)

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
      >
        <View tabLabel={"Sweatbook"} style={styles.container}>
        <FadeInView fadeDuration={500} fadeDelay={0}>
          <Text style={styles.welcome}>
            Sweatbook {myIcon}
          </Text>
        </FadeInView>
        <FadeInView fadeDuration={500} fadeDelay={500}>
          <Text style={styles.instructions}>
            Log your fitness.{/*It's time for another adventure.*/}
          </Text>
          <Text style={styles.instructions}>
            Because you're fat.{/*Press Start to begin!!*/}
          </Text>
        </FadeInView>
        <FadeInView fadeDuration={500} fadeDelay={1300}>
          <TouchableHighlight style={styles.startButton} onPress={() => this.tabView.goToPage(2)}>
            <Text style={styles.startButtonText}>
              Start
            </Text>
          </TouchableHighlight>
        </FadeInView>
        </View>
        <View tabLabel="Second">
          <Text style={styles.welcome}>
            Jobin
          </Text>
        </View>
        <View tabLabel="Third">
          <Text style={styles.welcome}>
            Loki
          </Text>
        </View>
        <View tabLabel="Fourth">
          <Text style={styles.welcome}>
            Jobin
          </Text>
        </View>
        </ScrollableTabView>
      </LinearGradient>

    );
  }
}
