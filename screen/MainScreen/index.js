import React from 'react'
import { View, Button } from 'react-native'
import { PokeItem } from '../../components'

export const MainScreen = ({ navigation }) => {
  return (
    <View>
      <PokeItem 
      onPress={() => navigation.navigate('PokeScreen')}/>
      <Button
        title="Go to PokeScreen"
        onPress={() => navigation.navigate('PokeScreen')}
      />
    </View>
  )
}
