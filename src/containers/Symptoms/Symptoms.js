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
  const [values, setValues] = useState([]);

  const { listSymptomsRequest, saveSymptomsRequest } = SymptomsActions;

  const dispatch = useDispatch();
  const { listSymptoms, errors, loading } = useSelector(({ symptoms }) => symptoms);

  const setFieldValue = (field, value) => {
    setValues({
      [field]: value
    });
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

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
    if (values.length === 0) {
      navigate('Onboarding');
    } else {
      dispatch(saveSymptomsRequest({ symptoms: values, token }));
      navigate('SymptomsDetails');
    }
  };

  const checkSymptom = symptom => {
    const index = values.findIndex(item => item.label === symptom.label);
    if (symptom.check) {
      setValues([...values, symptom]);
    } else {
      values.splice(index, 1);
      setValues(values);
    }
  };

  return (
    <SymptomsPresentation
      setFieldValue={setFieldValue}
      values={values}
      onSubmit={submit}
      checkSymptom={checkSymptom}
      symptoms={symptoms}
      messageError={messageError}
      errors={errors}
      loading={loading}
    />
  );
};

export default SymptomsContainer;
