import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Creators as identificationActions } from 'store/ducks/identification';
import { ValidationPhonePresentation } from 'components/presentation/Identification';

const ValidationPhoneContainer = () => {
  const dispatch = useDispatch();
  const reducer = useSelector(({ profile }) => profile);
  const { i18n, t: translate } = useTranslation();

  const [values, setValues] = useState({ name: '' });
  const [resend, setReSend] = useState(false);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    if (reducer.errors.length !== 0) {
      setMessageError(translate('generic-error'));
    }
  }, [reducer.errors]);

  const setFieldValue = (field, value) => {
    setValues({
      [field]: value
    });
  };

  const onSubmit = () => {
    if (!resend) {
      setReSend(true);
      dispatch(
        identificationActions.validationProfileRequest({
          values
        })
      );
    }
  };

  const reSendToken = () => {
    if (values.code) {
      dispatch(
        identificationActions.validationProfileRequest({
          values
        })
      );
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
      reSendToken={reSendToken}
      isLoading={reducer.isLoading}
      errors={reducer.errors}
      messageError={messageError}
    />
  );
};

export default ValidationPhoneContainer;
