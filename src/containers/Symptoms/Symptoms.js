import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { SymptomsPresentation } from 'components/presentation/Symptoms';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as SymptomsActions } from 'store/ducks/Symptoms';
import { getStoreItem } from 'config/storage';
import { getLanguage } from 'helpers';

const SymptomsContainer = () => {
  const { navigate } = useNavigation();
  const { i18n, t: translate } = useTranslation();
  const [conditions, setConditions] = useState([]);
  const [token, setToken] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const { listSymptomsRequest, saveSymptomsRequest } = SymptomsActions;

  const dispatch = useDispatch();
  const { listSymptoms, errors, loading } = useSelector(({ Symptoms }) => Symptoms);

  const checkCondition = condition => {
    const index = conditions.findIndex(item => item.label === condition.label);

    if (condition.check) {
      setConditions([...conditions, condition]);
    } else {
      conditions.splice(index, 1);
      setConditions(conditions);
    }
  };

  useEffect(() => {
    setConditions(listSymptoms);
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
    if (Symptoms.errors.length !== 0) {
      setMessageError(translate('generic-error'));
    }
  }, [Symptoms.errors]);

  const submit = () => {
    if (conditions.length === 0) {
      navigate('Home');
    } else {
      dispatch(
        saveSymptomsRequest({
          conditions: conditions.map(condition => condition.id),
          token
        })
      );
      navigate('Home');
    }
  };

  return (
    <SymptomsPresentation
      checkCondition={checkCondition}
      onSubmit={submit}
      conditions={conditions}
      messageError={messageError}
      errors={errors}
      loading={loading}
    />
  );
};

export default SymptomsContainer;
