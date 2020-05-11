/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from './Loader';

import COLORS from 'config/colors';
import TYPHOGRAPHY from 'config/typography';

const Button = props => (
  <StyledTouchableOpacity onPress={props.onPress} {...props}>
    {props.isLoading ? <Loader /> : <StyledText {...props}>{props.children}</StyledText>}
  </StyledTouchableOpacity>
);

Button.defaultProps = {
  width: '100%',
  height: '50px',
  justifyContent: 'center',
  alignItems: 'center',
  textColor: COLORS.white,
  fontWeight: '200',
  fontSize: 18,
  textAlign: 'center',
  borderRadius: 40,
  borderWidth: 0,
  borderColor: 'transparent',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  backgroundColor: COLORS.primary,
  position: 'relative',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  loadingColor: COLORS.primary,
  onPress: () => {},
  isLoading: false,
  disabled: false,
  typography: TYPHOGRAPHY.regular
};

Button.propTypes = {
  fontSize: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  textColor: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginRight: PropTypes.number,
  marginLeft: PropTypes.number,
  position: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  loadingColor: PropTypes.string,
  children: PropTypes.shape({}).isRequired,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  typography: PropTypes.array
};

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
  border-width: ${({ borderWidth }) => borderWidth};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? COLORS.greyLight : backgroundColor};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  ${props => props.typography};
`;

const StyledText = styled.Text`
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize}px;
`;

export default Button;
