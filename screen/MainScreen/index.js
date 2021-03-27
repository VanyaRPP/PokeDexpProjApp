import React, {useState} from 'react'
import { View, Button } from 'react-native'
import obj from '../../api'
import { PokeItem } from '../../components'

export const MainScreen = ({ navigation }) => {

  const [PokeList, setPokeList] = useState(obj.getPokeList());

  console.log('poo', PokeList );
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
