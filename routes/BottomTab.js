import React from 'react';
import styles from './style';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen, PokeScreen } from '../screen';
import MainStackNavigator from './MainStackNavigator';

import { PokeBallIcon, RegionsIcon, SettingsIcon, FilterIcon } from '../assets/images';

const BottomTab = createBottomTabNavigator();

const inactiveTintColor = 'rgb(0, 122, 255)';


const tabs = [
  {
    name: 'Weightlifting',
    component: PokeScreen,
    options: {
      tabBarIcon: ({color}: {color: string}) =>
        IconNavigation(
          <FilterIcon />,
          color
        ),
      tabBarLabel: ' ',
    },
  },
  {
    name: 'Trajectory',
    component: PokeScreen,
    options: {
      tabBarIcon: ({color}: {color: string}) =>
        IconNavigation(
          <RegionsIcon />,
          color
        ),
      tabBarLabel: ' ',
    },
  },
  {
    name: 'PokeList',
    component: MainStackNavigator,
    options: {
      tabBarIcon: ({color}: {color: string}) =>
        IconNavigation(
          <PokeBallIcon />,
        ),
      tabBarLabel: ' ',
    },
  },
  {
    name: 'Food',
    component: PokeScreen,
    options: {
      tabBarIcon: ({color}: {color: string}) =>
        IconNavigation(
          <FilterIcon />,
          color,
        ),
      tabBarLabel: ' ',
    },
  },
  {
    name: 'SettingsScreen',
    component: SettingsScreen,
    options: {
      tabBarIcon: ({color}: {color: string}) =>
        IconNavigation(
          <SettingsIcon />,
          color
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


const IconNavigation = (item, color) => (
  <View
    style={{
      paddingTop: color === inactiveTintColor ? 10 : 25,
      paddingBottom: 10,
      borderBottomColor: color === inactiveTintColor ? 'white' : 'transparent',
      borderBottomWidth: 3,
      borderStyle: 'solid',
      width: 33,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    {item}
  </View>
);
