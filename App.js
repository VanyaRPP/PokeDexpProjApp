import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components'
import { PokeItem, PokeView } from './components';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const App = () => {
  return (
    <View>
      <PokeView
        url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        color1='#bf2ac9'
        color2='#3ae831'
      />
      <PokeItem />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={PokeItem} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>

    </View> 
    
  );
};

export default App;
