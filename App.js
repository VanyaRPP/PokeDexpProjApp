import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components'
import { PokeItem, PokeView } from './components';


const App = () => {
  return (
    <View>
      {/* <PokeView
        url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
        color1='#bf2ac9'
        color2='#3ae831'
      /> */}
      <PokeItem />
    </View>
  );
};

export default App;
