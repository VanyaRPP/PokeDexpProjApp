import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components'
import { PokeItem, PokeView } from './components';

import 'react-native-gesture-handler';
import { Portal } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PokeScreen } from './screen/PokeScreen';
import BottomTabNavigator from './routes/BottomTab';

const Tab = createBottomTabNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Portal.Host>
        <BottomTabNavigator />
      </Portal.Host>
    </NavigationContainer>
  );
};

export default App;
