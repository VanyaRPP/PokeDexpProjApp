import React, {useState, useEffect } from 'react'
import { Text } from 'react-native';
import { MainView } from '../PokeView/style'
import obj from '../../api'
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

export const PokeItem = ({name}) => {
  const [pokeInfo, setPokeInfo] = useState([])
  const [pokeInfoEff, setpokeInfoEff] = useState([])
  const [pokeImage, setPokeImage] = useState()
  useEffect(() => {
    setPokeInfo(obj.getPokeInfo({name}))
    setpokeInfoEff(pokeInfo?._W)
    setPokeImage(pokeInfoEff?.sprites)
  }, [])
  console.log('eff',pokeInfoEff);
  console.log('img', pokeImage);
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
                  uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png'
                }}
              />
              <PokeType>
                <TextInfo>{name}</TextInfo>
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
