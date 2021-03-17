import React from 'react'
import { View, Text, Image } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { BorderView, HeaderView, TextEvolution, PokeEvolImg } from './style'

export default function PokeEvolutionView() {
  return (
    <BorderView>
      <HeaderView>
        <TextEvolution>Pichu</TextEvolution>
        <TextEvolution>172</TextEvolution>
      </HeaderView>
      <PokeEvolImg
        source={{
        uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          }}>
      </PokeEvolImg>
    </BorderView>
  )
}
