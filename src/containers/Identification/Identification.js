import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getStoreItem } from 'config/storage';
import Geolocation from '@react-native-community/geolocation';

import { Creators as identificationActions } from 'store/ducks/identification';
import { IdentificationPresentation } from 'components/presentation/Identification';

const IdentificationContainer = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const reducer = useSelector(({ identification }) => identification);

  const [values, setValues] = useState({ nickname: '', phoneNumber: '' });
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    if (reducer.errors.length !== 0) {
      setMessageError(translate('generic-error'));
    }
  }, [reducer.errors]);

  useEffect(() => {
    // reducer.success && navigate('ValidationPhone');
    if (reducer.success) {
      Geolocation.getCurrentPosition(
        position => {
          navigate('Profile');
          console.log(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }, [reducer.success]);

  const setFieldValue = (field, value) => {
    setValues({
      ...values,
      [field]: value
    });
  };

  const onSubmit = () => {
    if (values.nickname !== '' && values.phoneNumber !== '') {
      getStoreItem('@BeSafe:token', token => {
        dispatch(
          identificationActions.createProfileRequest({
            nickname: values.nickname,
            phoneNumber: values.phoneNumber,
            token
          })
        );
      });
    } else {
      setMessageError(translate('required-field'));
      dispatch(identificationActions.createProfileFail(['required-field']));
    }
  };

  return (
    <IdentificationPresentation
      errors={reducer.errors}
      messageError={messageError}
      onSubmit={onSubmit}
      values={values}
      setFieldValue={setFieldValue}
    />
  );
};

export default IdentificationContainer;
