import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { PreConditionsPresentation } from 'components/presentation/PreConditions';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as preConditionsActions } from 'store/ducks/preConditions';
import { getStoreItem } from 'config/storage';
import { getLanguage } from 'helpers';

const PreConditionsContainer = () => {
  const { navigate } = useNavigation();
  const { i18n, t: translate } = useTranslation();
  const [conditions, setConditions] = useState([]);
  const [token, setToken] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const { listPreConditionsRequest, savePreConditionsRequest } = preConditionsActions;

  const dispatch = useDispatch();
  const { listPreConditions, errors, loading } = useSelector(({ preConditions }) => preConditions);

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
    setConditions(listPreConditions);
  }, [listPreConditions]);

  useEffect(() => {
    i18n.changeLanguage(getLanguage());

    getStoreItem('@BeSafe:token', () => {
      setToken(token);
      dispatch(
        listPreConditionsRequest({
          token
        })
      );
    });
  }, []);

  useEffect(() => {
    if (preConditions.errors.length !== 0) {
      setMessageError(translate('generic-error'));
    }
  }, [preConditions.errors]);

  const submit = () => {
    if (conditions.length === 0) {
      navigate('Dashboard');
    } else {
      dispatch(
        savePreConditionsRequest({
          conditions: conditions.map(condition => condition.id),
          token
        })
      );
      navigate('Dashboard');
    }
  };

  return (
    <PreConditionsPresentation
      checkCondition={checkCondition}
      onSubmit={submit}
      conditions={conditions}
      messageError={messageError}
      errors={errors}
      loading={loading}
    />
  );
};

export default PreConditionsContainer;
