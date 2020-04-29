import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getStoreItem } from 'config/storage';
import Geolocation from '@react-native-community/geolocation';

import { Creators as identificationActions } from 'store/ducks/identification';
import { ValidationPhonePresentation } from 'components/presentation/Identification';

const ValidationPhoneContainer = () => {
  const dispatch = useDispatch();
  const reducer = useSelector(({ identification }) => identification);
  console.log(useSelector(state => state));
  const { i18n, t: translate } = useTranslation();

  const [values, setValues] = useState({ name: '' });
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    if (reducer.errors.length !== 0) {
      setMessageError(translate('generic-error'));
    }
  }, [reducer.errors]);

  useEffect(() => {
    if (reducer.success) {
      Geolocation.getCurrentPosition(position => {}, error => {}, {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000
      });
    }
  }, [reducer.success]);

  const setFieldValue = (field, value) => {
    setValues({
      [field]: value
    });
  };

  const resend = () => {
    if (values.nickname && values.phoneNumber) {
      getStoreItem('@BeSafe:token', () => {
        dispatch(
          identificationActions.createProfileRequest({
            nickname: values.nickname,
            phoneNumber: values.phoneNumber,
            token
          })
        );
      });
      navigate('ValidationPhone');
    } else {
      setMessageError(translate('required-field'));
      dispatch(identificationActions.createProfileFail(['required-field']));
    }
  };

  const onSubmit = () => {
    if (values.code) {
      getStoreItem('@BeSafe:token', () => {
        dispatch(
          identificationActions.validationProfileRequest({
            values,
            token
          })
        );
      });
    } else {
      setMessageError(translate('required-field'));
      dispatch(identificationActions.validationProfileFail(['required-field']));
    }
  };

  return (
    <ValidationPhonePresentation
      onSubmit={onSubmit}
      setFieldValue={setFieldValue}
      values={values}
      isLoading={reducer.isLoading}
      errors={reducer.errors}
      messageError={messageError}
    />
  );
};

export default ValidationPhoneContainer;
