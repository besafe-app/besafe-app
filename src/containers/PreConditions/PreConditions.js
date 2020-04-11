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
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE1ODYyNjU1NDM1OTIsInVwZGF0ZWRBdCI6MTU4NjQ0MDM4MzQ2NiwiaWQiOjEsIm5hbWUiOiIiLCJwaG9uZSI6Iis1NTMxOTg2NTQzOTMxIiwibmlja25hbWUiOiJDYXJsb3MiLCJjb2RlIjo0MDE3MTIsImdlbmRlciI6IiIsImJpcnRoZGF0ZSI6bnVsbCwiaWF0IjoxNTg2NDQwNDA1fQ.b8_V7suUtDh0a65tcrQVwgeOVvgDq4wmcbT-m1Jmsx8'
  );
  const [messageError, setMessageError] = useState(null);

  const dispatch = useDispatch();
  const preConditions = useSelector(state => state.preConditions);

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
    setConditions(preConditions.data);
  }, [preConditions.data]);

  useEffect(() => {
    i18n.changeLanguage(getLanguage());

    getStoreItem('@BeSafe:token', () => {
      // setToken(token);
      dispatch(
        preConditionsActions.listPreConditionsRequest({
          token
        })
      );
    });
  }, []);

  useEffect(() => {
    console.log(preConditions.errors);
    if (preConditions.errors.length !== 0) {
      setMessageError(translate('generic-error'));
    }
  }, [preConditions.errors]);

  const submit = () => {
    if (conditions.length === 0) {
      navigate('Home');
    } else {
      dispatch(
        preConditionsActions.savePreConditions({
          conditions: conditions.map(condition => condition.id),
          token
        })
      );
    }
  };

  return (
    <PreConditionsPresentation
      checkCondition={checkCondition}
      onSubmit={submit}
      conditions={conditions}
      messageError={messageError}
      errors={preConditions.errors}
    />
  );
};

export default PreConditionsContainer;
