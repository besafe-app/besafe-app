/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from 'config/colors';
import TYPOGRAPHY from 'config/typography';

const Label = props => <StyledLabel {...props}>{props.children}</StyledLabel>;

Label.defaultProps = {
  width: 'auto',
  height: 'auto',
  minHeight: 0,
  marginTop: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  marginRight: '0px',
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  borderBottomWidth: 0,
  borderBottomColor: 'transparent',
  backgroundColor: 'transparent',
  color: COLORS.defaultText,
  fontWeight: '200',
  textAlign: 'left',
  fontStyle: 'normal',
  fontSize: 14,
  lineHeight: 24,
  typography: TYPOGRAPHY.regular
};

Label.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontWeight: PropTypes.string,
  fontStyle: PropTypes.string,
  textAlign: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  borderBottomWidth: PropTypes.number,
  borderBottomColor: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  fontSize: PropTypes.number,
  minHeight: PropTypes.number,
  lineHeight: PropTypes.number,
  typography: PropTypes.array,
  children: PropTypes.any.isRequired
};

const StyledLabel = styled.Text`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
  padding-top: ${({ paddingTop }) => paddingTop}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  padding-left: ${({ paddingLeft }) => paddingLeft}px;
  padding-right: ${({ paddingRight }) => paddingRight}px;
  border-bottom-width: ${({ borderBottomWidth }) => borderBottomWidth};
  border-bottom-color: ${({ borderBottomColor }) => borderBottomColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-style: ${({ fontStyle }) => fontStyle};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight}px;
  ${props => props.typography};
`;

export default Label;
