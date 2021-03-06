import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components'
import { PokeItem, PokeView } from './components';

import 'react-native-gesture-handler';
import { Portal } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PokeView
        url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        color1='#bf2ac9'
        color2='#3ae831'
      />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Portal.Host>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={PokeItem} />
          <Tab.Screen name="Home1" component={SettingsScreen} />
          <Tab.Screen name="Home12" component={PokeItem} />
          <Tab.Screen name="Home31" component={SettingsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </Portal.Host>
    </NavigationContainer>
  );
};

export default App;
