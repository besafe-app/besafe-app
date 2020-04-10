import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';
import COLORS from 'config/colors';
import styled from 'styled-components/native';
import Label from './Label';
import { TouchableWithoutFeedback } from 'react-native';

const Container = styled.View`
  padding: 16px 12px;
  border: solid 1px ${COLORS.grey};
  border-radius: 8px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

const DatePicker = ({
  onChange,
  label,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  value
}) => {
  const now = new Date();
  const [show, setShow] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setShow(true)}>
      <Container
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
      >
        <Label color={COLORS.defaultTextLight} fontSize={18}>
          {!value ? label : value.toLocaleDateString()}
        </Label>
        {show && (
          <DateTimePicker
            timeZoneOffsetInMinutes={now.getTimezoneOffset()}
            value={value}
            display='default'
            onChange={event => {
              setShow(false);
              onChange(event.nativeEvent.timestamp);
            }}
          />
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
};

DatePicker.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.object
};

DatePicker.defaultProps = {
  onChange: () => {},
  label: '',
  marginBottom: 0,
  marginRight: 0,
  marginLeft: 0,
  marginTop: 0,
  value: new Date()
};

export default DatePicker;
