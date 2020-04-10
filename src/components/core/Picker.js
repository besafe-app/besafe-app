import React, { useState } from 'react';
import PropTypes from 'prop-types';
import iconArrow from 'assets/icons/arrow-down.png';
import { Image, TouchableWithoutFeedback, View, Text } from 'react-native';
import styled from 'styled-components/native';
import COLORS from 'config/colors';
import Label from 'components/core/Label';
import { CustomPicker } from 'react-native-custom-picker';

const Container = styled.View`
  border: solid 1px ${COLORS.grey};
  border-radius: 8px;
  padding: 16px 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ marginTop }) => marginTop}
  margin-left: ${({ marginLeft }) => marginLeft}
  margin-right: ${({ marginRight }) => marginRight}
  margin-bottom: ${({ marginBottom }) => marginBottom}
`;

const Option = styled.View`
  padding: 10px;
`;

const Picker = ({
  options,
  placeholder,
  value,
  onValueChange,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop
}) => {
  let openOptions;

  return (
    <TouchableWithoutFeedback onPress={() => openOptions()}>
      <Container
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
      >
        <CustomPicker
          value={value}
          options={options}
          onValueChange={onValueChange}
          fieldTemplate={({ selectedItem, getLabel }) => {
            if (!selectedItem || !selectedItem.value) {
              return (
                <Label fontSize={18} color={COLORS.defaultTextLight}>
                  {placeholder}
                </Label>
              );
            }

            return (
              <Label fontSize={18} color={COLORS.defaultTextLight}>
                {getLabel(selectedItem.label)}
              </Label>
            );
          }}
          optionTemplate={({ item, getLabel }) => (
            <Option>
              <Label fontSize={15} color={COLORS.defaultTextLight}>
                {getLabel(item.label)}
              </Label>
            </Option>
          )}
          modalAnimationType='fade'
          optionTemplateProps={{
            containerStyle: {
              borderBottomWidth: 0
            }
          }}
          ref={element => {
            if (element && element.showOptions) {
              openOptions = element.showOptions;
            }
          }}
        />
        <Image source={iconArrow} />
      </Container>
    </TouchableWithoutFeedback>
  );
};

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  ),
  placeholder: PropTypes.string,
  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any
  }),
  onValueChange: PropTypes.func,
  marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Picker.defaultProps = {
  options: [],
  placeholder: '',
  value: {},
  onValueChange: () => {},
  marginBottom: 0,
  marginRight: 0,
  marginLeft: 0,
  marginTop: 0
};

export default Picker;
