import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguage } from 'helpers';

import Toast from 'components/core/Toast';
import TextInput from 'components/core/TextInput';
import Label from 'components/core/Label';
import Button from 'components/core/Button';

import COLORS from 'config/colors';
import { LabelContainer, ButtonContainer, FormContainer, Container } from './styles';

const IdentificationPresentation = ({ onSubmit, errors, messageError, values, setFieldValue }) => {
  const { t: translate, i18n } = useTranslation();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  useEffect(() => {
    if (values.nickname.length !== 0 && values.phoneNumber.length !== 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [values]);

  return (
    <Container>
      <FormContainer>
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          {translate('identification-title')}
        </Label>
        <TextInput
          placeholder={translate('identification-nickname')}
          marginTop={24}
          value={values.nickname}
          onChange={value => setFieldValue('nickname', value)}
        />
        <TextInput
          placeholder={translate('identification-phone-number')}
          marginTop={24}
          value={values.phoneNumber}
          onChange={value => setFieldValue('phoneNumber', value)}
        />
        <LabelContainer>
          <Label fonSize={16} lineHeight={24}>
            {translate('identification-text')}}
          </Label>
        </LabelContainer>
      </FormContainer>
      <ButtonContainer>
        <Button disabled={disabled} marginTop={20} onPress={onSubmit}>
          {translate('identification-title-receive-sms')}
        </Button>
      </ButtonContainer>
      <Toast show={errors.length !== 0} type='error' message={messageError} />
    </Container>
  );
};

export default IdentificationPresentation;
