import React, { useState, useEffect } from 'react';
import { ValidationPhonePresentation } from 'components/presentation/Identification';

const ValidationPhoneContainer = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const reducer = useSelector(({ profile }) => profile);

  const [values, setValues] = useState({ name: '' });
  const [messageError, setMessageError] = useState('');
  const { i18n, t: translate } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  useEffect(() => {
    if (reducer.errors.length !== 0) {
      setMessageError(translate('generic-error'));
    }
  }, [reducer.errors]);

  const onSubmit = () => {};
  const reSendToken = () => {};

  return (
    <ValidationPhonePresentation
      onSubmit={onSubmit}
      reSendToken={reSendToken}
      isLoading={reducer.isLoading}
      errors={reducer.errors}
      messageError={messageError}
    />
  );
};

export default ValidationPhoneContainer;
