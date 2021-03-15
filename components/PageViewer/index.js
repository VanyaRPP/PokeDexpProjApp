import React from 'react'
import { View, Text } from 'react-native'
import PagerView from 'react-native-pager-view';
import { PokeItem } from '../PokeItem';

export const PageViewer = () => {
  return (
    <>
      <PagerView
        style={{ flex: 1, backgroundColor: 'yellow' }}
        initialPage={0}
      >
        <View key="1">
          <PokeItem />
        </View>
        <View key="2">
          <Text>Пизда</Text>
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
          </View>
        </View>
      </PagerView>
    </>
  )
}
