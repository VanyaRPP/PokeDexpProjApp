import React from 'react'
import {} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { 
  MainView, 
  PokeImage, 
  SmallView, 
  TestView 
} from './style';

export const PokeView = ({url, color1, color2}) => {
  return (
    <MainView>
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={[color1, color2]}
        style={{ borderRadius: 150 }}
      >
        <TestView>
          <SmallView>
            <PokeImage
              source={{
                uri: url
              }}
            />
          </SmallView>
        </TestView>
      </LinearGradient>
    </MainView>
  );
};
