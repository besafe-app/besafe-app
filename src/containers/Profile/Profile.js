import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { Creators as profileActions } from 'store/ducks/profile';
import { ProfilePresentation } from 'components/presentation/Profile';
import { getLanguage } from 'helpers';
import { getStoreItem } from 'config/storage';

const ProfileContainer = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const reducer = useSelector(({ profile }) => profile);
  const [values, setValues] = useState({
    name: '',
    gender: {
      label: '',
      value: ''
    },
    date: new Date()
  });
  const [messageError, setMessageError] = useState('');
  const { i18n, t: translate } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  const setFieldValue = (field, value) => {
    setValues({
      ...values,
      [field]: value
    });
  };

  const updateProfile = () => {
    if (values.name && values.gender.value && values.date) {
      getStoreItem('@BeSafe:token', token => {
        dispatch(
          profileActions.updateProfileRequest({
            values,
            token
          })
        );
      });
    } else {
      setMessageError(translate('required-field'));
      dispatch(profileActions.updateProfileFail(['required-field']));
    }
  };

  useEffect(() => {
    if (Object.keys(reducer.data).length !== 0) {
      navigate('PreConditions');
    }
  }, [reducer.data]);

  useEffect(() => {
    if (reducer.errors.length !== 0) {
      setMessageError(translate('generic-error'));
    }
  }, [reducer.errors]);

  return (
    <ProfilePresentation
      setFieldValue={setFieldValue}
      values={values}
      isLoading={reducer.isLoading}
      errors={reducer.errors}
      onSubmit={updateProfile}
      messageError={messageError}
    />
  );
};

export default ProfileContainer;
