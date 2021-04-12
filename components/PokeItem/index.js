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
  
  const [pokeInfo, setPokeInfo] = useState(obj.getPokeInfo({name}))
  const [pokeInfoEff, setpokeInfoEff] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png')
  const [pokeImage, setPokeImage] = useState();

  useEffect(() => {
    setPokeInfo(obj.getPokeInfo({name}))
    setpokeInfoEff(pokeInfo?._W?.sprites?.front_default)
    console.log('effPIZDE', pokeInfoEff);
  }, [name])  
  const id = pokeInfo?._W?.id
  console.log(pokeInfo?._W?.id);
  console.log('eff', pokeInfoEff);
  console.log('f');

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
                  uri: pokeInfoEff
                }}
              />
              <PokeType>
                <TextInfo>{name}</TextInfo>
                <TextInfo>Grass</TextInfo>
                <TextInfo>Poison</TextInfo>
              </PokeType>
            </PokeInfoType>
            <PokeIndex>{id}</PokeIndex>
          </PokeInfo>
        </LinearGradient>
      </PokeRectangle>
    </MainView>
  )
}
