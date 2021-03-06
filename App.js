import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components'
import { PokeItem, PokeView } from './components';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View>
      <PokeView
        url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        color1='#bf2ac9'
        color2='#3ae831'
      />
      <PokeItem />
      {/* <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={PokeItem} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer> */}
    </View>
  );
};

export default App;
