import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { SymptomsDetailsPresentation } from 'components/presentation/Symptoms';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as SymptomsActions } from 'store/ducks/symptoms';
import { getStoreItem } from 'config/storage';
import { getLanguage } from 'helpers';

const SymptomsDetailsContainer = () => {
  const { navigate } = useNavigation();
  const { i18n, t: translate } = useTranslation();

  const [symptoms, setSymptoms] = useState([]);
  const [token, setToken] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [values, setValues] = useState({ id: '', name: '', complement: '' });

  const { listSymptomsSelectedRequest } = SymptomsActions;

  const dispatch = useDispatch();
  const { selectedSymptoms, errors, loading } = useSelector(({ symptoms }) => symptoms);

  const setFieldValue = (field, value) => {
    setValues({
      [field]: value
    });
  };

  useEffect(() => {
    !loading && setSymptoms(selectedSymptoms);
  }, [selectedSymptoms]);

  useEffect(() => {
    i18n.changeLanguage(getLanguage());

    getStoreItem('@BeSafe:token', () => {
      setToken(token);
      dispatch(
        listSymptomsSelectedRequest({
          token
        })
      );
    });
  }, []);

  useEffect(() => {
    if (errors.length !== 0) {
      setMessageError(translate('generic-error'));
    }
  }, [errors]);

  const submit = () => {
    if (symptoms.length === 0) {
      navigate('Home');
    } else {
      navigate('SymptomsDetails');
    }
  };

  return (
    <SymptomsDetailsPresentation
      setFieldValue={setFieldValue}
      values={values}
      onSubmit={submit}
      symptoms={symptoms}
      messageError={messageError}
      errors={errors}
      loading={loading}
    />
  );
};

export default SymptomsDetailsContainer;
