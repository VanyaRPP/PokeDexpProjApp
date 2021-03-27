import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MainText, } from './style'

export default function PokeHeader({title}) {
  return (
    <View>
      <MainText>{title}</MainText>
    </View>
  )
}
