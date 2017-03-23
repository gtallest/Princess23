import React, { Component } from 'react';
import {
  Animated,
} from 'react-native';

export class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: this.props.fadeDuration,
        delay: this.props.fadeDelay
      }
    ).start();
  }
  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

