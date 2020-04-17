import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getStoreItem } from 'config/storage';

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

  const setFieldValue = (field, value) => {
    setValues({
      ...values,
      [field]: value
    });
  };

  const onSubmit = () => {
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
