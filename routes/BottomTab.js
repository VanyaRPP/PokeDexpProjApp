import React from 'react';
import styles from './style';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PokeScreen } from '../screen/PokeScreen';
import { PokeItem } from '../components';
import { FilterIcon } from '../assets/images/FilterIcon';
import { PokeBallIcon, RegionsIcon } from '../assets/images';

const BottomTab = createBottomTabNavigator();
const widthIcon = '28';
const heightIcon = '25';
const inactiveTintColor = 'red';


const tabs = [
  {
    name: 'Weightlifting',
    component: PokeScreen,
    options: {
      tabBarIcon: () =>
        IconNavigation(
          // @ts-ignore
          <FilterIcon />
        ),
      tabBarLabel: ' ',
    },
  },
  {
    name: 'Trajectory',
    component: PokeItem,
    options: {
      tabBarIcon: () =>
        IconNavigation(
          // @ts-ignore
          <RegionsIcon />
        ),
      tabBarLabel: ' ',
    },
  },
  {
    name: 'PokeList',
    component: PokeItem,
    options: {
      tabBarIcon: () =>
        IconNavigation(
          // @ts-ignore
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
          // @ts-ignore
          <FilterIcon />
        ),
      tabBarLabel: ' ',
    },
  },
  {
    name: 'Notes',
    component: PokeScreen,
    options: {
      tabBarIcon: () =>
        IconNavigation(
          // @ts-ignore
          <FilterIcon /> 
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
        activeTintColor: 'black',
        inactiveTintColor: 'red',
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

    }}>
    {item}
  </View>
);
