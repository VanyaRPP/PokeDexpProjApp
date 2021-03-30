import React, {useState} from 'react'
import { View, Button } from 'react-native'
import obj from '../../api'
import { PokeItem } from '../../components'

export const MainScreen = ({ navigation }) => {

  const [PokeBase, setPokeBase] = useState(obj.getPokeData());

  const [PokeList, setPokeList] = useState(obj.getPokeList());

  const [PokeBulba, setPokeBulba] = useState(obj.getPokeBulba());


  console.log('poo', PokeList.W );
  console.log('poo123', PokeBase._W );
  console.log('bulba', PokeBulba.W);
  return (
    <View>
      <Button
        title="Go to PokeScreen"
        onPress={() => navigation.navigate('PokeScreen')}
      />
      <PokeItem
        onPress={() => navigation.navigate('PokeScreen')}
      />
    </View>
  )
}
