import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { LeftArrowIcon } from '../../assets/images'
import { FilterIcon } from '../../assets/images/FilterIcon'
import { PokeBallIcon } from '../../assets/images/PokeBallIcon'
import { PokeView } from '../../components'
import { MainView, PokeWrapper } from './style'
import { useNavigation } from '@react-navigation/native';


export const PokeScreen = ({ navigation: { goBack } }) => {
  const navigation = useNavigation();
  return (
    <MainView>
      <PokeWrapper>
        <TouchableOpacity
          onPress = {()=> goBack()}
        >
          <LeftArrowIcon/>
        </TouchableOpacity>
        <PokeView
          url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          color1='#bf2ac9'
          color2='#3ae831'
        />
      </PokeWrapper>
    </MainView>
  )
}
