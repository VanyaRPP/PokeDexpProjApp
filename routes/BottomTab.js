import React from 'react';
import styles from './style';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen, PokeScreen } from '../screen';
import MainStackNavigator from './MainStackNavigator';

import { PokeBallIcon, RegionsIcon, SettingsIcon, FilterIcon } from '../assets/images';

const BottomTab = createBottomTabNavigator();


const tabs = [
  {
    name: 'Weightlifting',
    component: PokeScreen,
    options: {
      tabBarIcon: () =>
        IconNavigation(
          <FilterIcon />
        ),
      tabBarLabel: ' ',
    },
  },
  {
    name: 'Trajectory',
    component: PokeScreen,
    options: {
      tabBarIcon: () =>
        IconNavigation(
          <RegionsIcon />
        ),
      tabBarLabel: ' ',
    },
  },
  {
    name: 'PokeList',
    component: MainStackNavigator,
    options: {
      tabBarIcon: () =>
        IconNavigation(
          <PokeBallIcon />
        ),
      tabBarLabel: ' ',
    },
  },
  {
    name: 'Food',
    component: PokeScreen,
    options: {
      tabBarIcon: () =>
        IconNavigation(
          <FilterIcon />
        ),
      tabBarLabel: ' ',
    },
  },
  {
    name: 'SettingsScreen',
    component: SettingsScreen,
    options: {
      tabBarIcon: () =>
        IconNavigation(
          <SettingsIcon />
        ),
      tabBarLabel: ' ',
    },
  },
];

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="PokeScreen"
      tabBarOptions={{
        style: styles.navigatorStyle,
      }}>
      {tabs.map((screen, index) => {
        return (
          <BottomTab.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
      })}
    </BottomTab.Navigator>
  );
}


const IconNavigation = (item) => (
  <View>
    {item}
  </View>
);
