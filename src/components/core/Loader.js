import React from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import icon from 'assets/icons/Loader.png';
import iconRed from 'assets/icons/loader-red.png';
import COLORS from 'config/colors';
import Label from 'components/core/Label';

const Loader = ({ fullScreen, label }) => {
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

  if (fullScreen) {
    return (
      <Container>
        <Animated.Image style={{ transform: [{ rotate: spin }] }} source={iconRed} />
        <Label fontSize={22} color={COLORS.red} marginTop={15}>
          {label}
        </Label>
      </Container>
    );
  }

  return <Animated.Image style={{ transform: [{ rotate: spin }] }} source={icon} />;
};

const Container = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};
  opacity: 0.95;
`;

Loader.propTypes = {
  fullScreen: PropTypes.bool,
  label: PropTypes.string
};

Loader.defaultProps = {
  fullScreen: false,
  label: null
};

export default Loader;
