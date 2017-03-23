import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import { Welcome } from './Welcome'
import { Princess23 } from './Princess23'


export class Root extends Component {
  constructor () {
    super()
    this.state = {
      started: false
    }
  }

  startApp = () => {
    this.setState({ started: true })
  }

  renderRoot (ComponentToRender) {
    return (
      <ComponentToRender startApp={this.startApp}/>
    )
  }

  render () {
    const { started } = this.state
    return started ? this.renderRoot(Princess23) : this.renderRoot(Welcome)
  }
}
