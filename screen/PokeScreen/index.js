import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { LeftArrowIcon } from '../../assets/images'
import { PokeView } from '../../components'
import { PageViewer } from '../../components/PageViewer'
import { MainView, PokeWrapper } from './style'

export const PokeScreen = ({ navigation: { goBack } }) => {
  return (
    <MainView>
      <PokeWrapper>
        <TouchableOpacity
          onPress={() => goBack()}
        >
          <LeftArrowIcon />
        </TouchableOpacity>
        <PokeView
          url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          color1='#bf2ac9'
          color2='#3ae831'
        />
      </PokeWrapper>
      <View
        style={{ 
          flex: 1,
          backgroundColor: 'violet',
          marginBottom: 60,
        }}
      >
        <PageViewer />
      </View>
    </MainView>
  )
}
