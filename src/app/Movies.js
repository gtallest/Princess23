import React, { Component } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native'
import { styles } from './styles'
import { FadeInView } from './FadeInView'

class Movies extends Component {
  constructor () {
    super()

  }

  render () {
    return (
      <ScrollView>
        <FadeInView fadeDuration={500} fadeDelay={0}>
          <View style={styles.container}>
            <Text style={[{'marginTop': 50}, styles.welcome]}>
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
              Movies{'\n'}
            </Text>
          </View>
        </FadeInView>
      </ScrollView>
    )
  }
}

export default Movies
