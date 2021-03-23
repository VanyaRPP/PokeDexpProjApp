import React, { useEffect, useState, useRef } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'
import { PokeBallIcon } from '../../assets/images';


export default function SplashLoading() {
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  useEffect(() => {
    StartImageRotate();
  }, []);

  function StartImageRotate() {
    rotateValue.setValue(0);

    Animated.loop(Animated.timing(rotateValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
    ).start();
  }

  const RotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View>
      <Animated.View
        style={{
          transform: [{ rotate: RotateData }],
        }}
        
      >
        <PokeBallIcon />
      </Animated.View>
    </View>
  );
}



