import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Label from 'components/core/Label';
import TextInput from 'components/core/TextInput';
import Picker from 'components/core/Picker';
import DatePicker from 'components/core/DatePicker';
import Button from 'components/core/Button';
import COLORS from 'config/colors';
import { getLanguage } from 'helpers';
import { FormContainer, Container } from './styles';
import Toast from 'components/core/Toast';

const ProfilePresentation = ({
  values,
  setFieldValue,
  isLoading,
  errors,
  messageError,
  onSubmit
}) => {
  const { t: translate, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  return (
    <Container>
      <FormContainer>
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          {translate('profile-create')}
        </Label>
        <TextInput
          placeholder={translate('profile-full-name')}
          marginTop={24}
          onChange={value => setFieldValue('name', value)}
          value={values.name}
        />
        <Picker
          placeholder={translate('gender')}
          marginTop='24px'
          options={[
            {
              label: translate('profile-female'),
              value: 'female'
            },
            {
              label: translate('profile-male'),
              value: 'male'
            }
          ]}
          value={values.gender}
          onValueChange={value => setFieldValue('gender', value)}
        />
        <DatePicker
          label={translate('profile-birthdate')}
          marginTop={24}
          value={values.date}
          onChange={value => setFieldValue('date', new Date(value))}
        />
      </FormContainer>
      <Button
        fontSize={18}
        onPress={onSubmit}
        isLoading={isLoading}
        disabled={!values.name || !values.gender.value || !values.date}
      >
        {translate('next')}
      </Button>
      <Toast show={errors.length !== 0} type='error' message={messageError} />
    </Container>
  );
};

ProfilePresentation.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  isLoading: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string),
  messageError: PropTypes.string
};

ProfilePresentation.defaultProps = {
  isLoading: false,
  errors: [],
  messageError: ''
};

export default ProfilePresentation;
