import React from 'react'
import { Text } from 'react-native';
import { MainView } from '../PokeView/style'
import LinearGradient from 'react-native-linear-gradient';
import {
  PokeRectangle,
  ImageItem,
  PokeType,
  TextInfo,
  PokeInfo,
  PokeIndex,
  PokeInfoType,
} from './style';

export const PokeItem = () => {
  return (
    <MainView>
      <PokeRectangle>
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#3ae831', '#bf2ac9']}
          style={{ borderRadius: 100 }}
        >
          <PokeInfo>
            <PokeInfoType>
              <ImageItem
                source={{
                  uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                }}
              />
              <PokeType>
                <TextInfo>Bulbusaur</TextInfo>
                <TextInfo>Grass</TextInfo>
                <TextInfo>Poison</TextInfo>
              </PokeType>
            </PokeInfoType>
            <PokeIndex>001</PokeIndex>
          </PokeInfo>
        </LinearGradient>
      </PokeRectangle>
    </MainView>
  )
}
