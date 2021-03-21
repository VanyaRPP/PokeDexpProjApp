import React, {useState} from 'react'
import { View, Button } from 'react-native'
import obj from '../../api'
import { PokeItem } from '../../components'

export const MainScreen = ({ navigation }) => {

  const [PokeList, setPokeList] = useState(obj.getPokeBulba());

  console.log(PokeList);
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
