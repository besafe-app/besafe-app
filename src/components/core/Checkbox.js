import React, { useState } from 'react';
import PropTypes from 'prop-types';
import checkIcon from 'assets/icons/checkbox.png';
import styled from 'styled-components/native';
import COLORS from 'config/colors';
import Label from './Label';
import TextInput from './TextInput';
import { Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const Unchecked = styled.View`
  border: 2px solid ${COLORS.grey};
  width: 20px;
  height: 20px;
  border-radius: 2px;
`;

const Container = styled.View`
  flex-direction: ${({ checkPosition }) => (checkPosition === 'left' ? 'row' : 'row-reverse')};
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  padding: 0px 10px;
`;

const Checkbox = ({
  label,
  checked,
  onChange,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  checkPosition,
  complement,
  setFieldValue,
  values
}) => {
  const [check, setCheck] = useState(checked);

  const changeCheck = () => {
    setCheck(!check);
    onChange({ label, check: !check });
  };

  return (
    <>
      <Container
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        checkPosition={checkPosition}
      >
        <TouchableOpacity onPress={changeCheck}>
          {check ? <Image source={checkIcon} /> : <Unchecked />}
        </TouchableOpacity>
        {check && complement && (
          <TextInput
            placeholder={'Informe'}
            marginTop={0}
            marginBottom={0}
            marginLeft={0}
            onChange={value => setFieldValue('complement', value)}
            value={values.complement}
          />
        )}
        <TouchableWithoutFeedback onPress={changeCheck}>
          <Label color={COLORS.defaultTextLight} fontSize={18}>
            {label}
          </Label>
        </TouchableWithoutFeedback>
      </Container>
    </>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  checkPosition: PropTypes.string
};

Checkbox.defaultProps = {
  label: '',
  checked: false,
  onChange: () => {},
  marginBottom: 0,
  marginRight: 0,
  marginLeft: 0,
  marginTop: 0,
  checkPosition: 'left'
};

export default Checkbox;
