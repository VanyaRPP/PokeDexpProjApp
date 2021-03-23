import React, { Component } from 'react'
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing } from 'react-native'
import { PokeBallIcon } from '../../assets/images'

export default class PokeLoader extends Component {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View >
        <Animated.View
          style={{
            transform: [{rotate: spin}] }}
        >
          <PokeBallIcon />
        </Animated.View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
