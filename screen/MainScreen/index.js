import React, { useState, useEffect } from 'react'
import { View, Button, ScrollView, TouchableOpacity } from 'react-native'
import obj from '../../api'
import { PokeItem } from '../../components'

export const MainScreen = ({ navigation }) => {

  const [PokeBase, setPokeBase] = useState(obj.getPokeData());

  const [PokeList, setPokeList] = useState(obj.getPokeList());

  // const [PokeData, setPokeData] = useState([])

  // useEffect(() => {
  //   setPokeData(PokeList._W.results)
  // }, [PokeList])
  const rez = PokeList?._W?.results

  // console.log('rez', rez );
  // console.log('poo123', PokeBase._W );
  // console.log('bulba', PokeBulba.W);

  return (
    <View>
      <Button
        title="Go to PokeScreen"
        onPress={() => navigation.navigate('PokeScreen')}
      />
      <ScrollView>
        {
          rez?.map((i) => {
            return (
              <TouchableOpacity 
                key={i.name}
                onPress={() => navigation.navigate('PokeScreen')}
              >
                <PokeItem
                  onPress={() => navigation.navigate('PokeScreen')}
                  name={i.name}
                />
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  )
}
