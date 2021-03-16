import React from 'react'
import { View, Text } from 'react-native'
import { CircleView, TextStats } from './style'


export default function PokeStatsCircle({icon, circleText, circleNumber}) {
  return (
    <View>
      <CircleView>
        {icon}
        <TextStats>{circleText}</TextStats>
        <TextStats>{circleNumber}</TextStats>
      </CircleView>
    </View>
  )
}