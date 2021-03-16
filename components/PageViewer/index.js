import React from 'react'
import { View, Text } from 'react-native'
import PagerView from 'react-native-pager-view';
import PokeEvolutionScreen from '../../screen/PokeEvolutionScreen';
import PokeStatsScreen from '../../screen/PokeStatsScreen';
import { PokeItem } from '../PokeItem';


export const PageViewer = () => {
  return (
    <>
      <PagerView
        style={{ flex: 1, backgroundColor: 'yellow' }}
        initialPage={0}
      >
        <View key="1">
        <PokeStatsScreen />
        </View>
        <View key="2">
          {/* <Text>Пизда</Text>
          <View
            style={{
              height: 60,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>
              ••
        </Text>
          </View> */}
          <PokeEvolutionScreen />
        </View>
      </PagerView>
    </>
  )
}
