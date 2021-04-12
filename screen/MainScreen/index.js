import React, { useState, useEffect } from 'react'
import { View, Button, ScrollView, TouchableOpacity } from 'react-native'
import obj from '../../api'
import { PokeItem } from '../../components'

export const MainScreen = ({ navigation }) => {

  // const [PokeBase, setPokeBase] = useState(obj.getPokeData());

  const [PokeList, setPokeList] = useState([]);

  const [PokeData, setPokeData] = useState();


  useEffect(() => {
    setPokeList(obj.getPokeList());
    setPokeData(PokeList?._W?.results);
    console.log('huiineffect', PokeData);
  },[ ])

  console.log('hui', PokeData);
  
  return (
    <View>
      <Button
        title="Go to PokeScreen"
        onPress={() => navigation.navigate('PokeScreen')}
      />
      <ScrollView>
        {
          PokeData?.map((i) => {
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

