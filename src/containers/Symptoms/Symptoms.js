import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { SymptomsPresentation } from 'components/presentation/Symptoms';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as SymptomsActions } from 'store/ducks/symptoms';
import { getStoreItem } from 'config/storage';
import { getLanguage } from 'helpers';

const SymptomsContainer = () => {
  const { navigate } = useNavigation();
  const { i18n, t: translate } = useTranslation();

  const [symptoms, setSymptoms] = useState([]);
  const [token, setToken] = useState(null);
  const [messageError, setMessageError] = useState(null);

  const { listSymptomsRequest } = SymptomsActions;

  const dispatch = useDispatch();
  const { listSymptoms, errors, loading } = useSelector(({ symptoms }) => symptoms);

  const checkSymptom = condition => {
    const index = symptoms.findIndex(item => item.label === condition.label);
    if (condition.check) {
      setSymptoms([...symptoms, symptom]);
    } else {
      symptoms.splice(index, 1);
      setSymptoms(symptoms);
    }
  };

  useEffect(() => {
    !loading && setSymptoms(listSymptoms);
  }, [listSymptoms]);

  useEffect(() => {
    i18n.changeLanguage(getLanguage());

    getStoreItem('@BeSafe:token', () => {
      setToken(token);
      dispatch(
        listSymptomsRequest({
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
      navigate('Onboarding');
    }
  };

  return (
    <SymptomsPresentation
      checkSymptom={checkSymptom}
      onSubmit={submit}
      symptoms={symptoms}
      messageError={messageError}
      errors={errors}
      loading={loading}
    />
  );
};

export default SymptomsContainer;
