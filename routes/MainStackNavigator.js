import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PokeItem } from '../components';
import { PokeScreen } from '../screen/PokeScreen';
import { MainScreen } from '../screen/MainScreen';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={{MainScreen}}
    > 
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="PokeScreen" component={PokeScreen} />
    </Stack.Navigator>
  )
}
