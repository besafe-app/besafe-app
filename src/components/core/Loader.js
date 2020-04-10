import React from 'react';
import { Animated, Easing } from 'react-native';
import icon from 'assets/icons/Loader.png';

const Loader = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg']
  });

  return <Animated.Image style={{ transform: [{ rotate: spin }] }} source={icon} />;
};

export default Loader;
