import React from 'react'
import { View, Text } from 'react-native'
import { PokeView } from '../../components'
import { MainView, PokeWrapper } from './style'

export const PokeScreen = () => {
  return (
    <MainView>
      <PokeWrapper>
        <Text>
          XYU
        </Text>
        <PokeView
          url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          color1='#bf2ac9'
          color2='#3ae831'
        />
      </PokeWrapper>
    </MainView>
  )
}
