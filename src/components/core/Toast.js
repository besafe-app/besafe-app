import React from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import COLORS from 'config/colors';
import Label from './Label';

const Toast = ({ message, type, show }) => {
  const showValue = new Animated.Value(-48);

  const startAnimation = Animated.timing(showValue, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.linear
  });

  if (show) {
    startAnimation.start(() =>
      setTimeout(() => {
        Animated.timing(showValue, {
          toValue: -48,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear
        }).start();
      }, 2000)
    );
  } else {
    return null;
  }

  return (
    <Container
      style={{
        transform: [
          {
            translateY: showValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1]
            })
          }
        ]
      }}
      type={type}
    >
      <Label color={COLORS.white} fontSize={18}>
        {message}
      </Label>
    </Container>
  );
};

const Container = styled(Animated.View)`
  background-color: ${({ type }) => (type === 'error' ? COLORS.alertColor : COLORS.successColor)};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
  position: absolute;
  left: 0;
  right: 0;
  height: 48px;
`;

Toast.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool,
  type: PropTypes.oneOf('error', 'success')
};

Toast.defaultProps = {
  show: false,
  type: 'success',
  message: ''
};

export default Toast;
