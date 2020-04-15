import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguage } from 'helpers';

import Toast from 'components/core/Toast';
import TextInput from 'components/core/TextInput';
import Label from 'components/core/Label';
import Button from 'components/core/Button';

import COLORS from 'config/colors';
import { LabelContainer, ButtonContainer, FormContainer, Container } from './styles';

const ValidationPhonePresentation = ({
  isLoading,
  values,
  setFieldValue,
  errors,
  onSubmit,
  reSendToken,
  messageError
}) => {
  const [seconds, setSeconds] = useState(0);
  const [disabledButtom, setDisabledButtom] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const { t: translate, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  useEffect(() => {
    values?.code && setDisabled(false);
  }, [values]);

  useEffect(() => {
    startSeconds();
  }, []);

  const startSeconds = () => {
    let restart = 3;
    const start = setInterval(() => {
      restart--;
      setSeconds(restart);
      if (restart == 0) {
        clearInterval(start);
        setDisabledButtom(false);
      }
    }, 1000);
  };

  return (
    <Container>
      <FormContainer>
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          {translate('verification-title')}
        </Label>
        <LabelContainer>
          <Label fonSize={16} lineHeight={24}>
            {translate('verification-text')}
          </Label>
        </LabelContainer>
        <TextInput
          placeholder={translate('verification-code')}
          marginTop={24}
          onChange={value => setFieldValue('code', value)}
          value={values.code}
        />
      </FormContainer>
      <ButtonContainer>
        <Button disabled={disabled} action={() => onSubmit()}>
          {translate('verification-label')}
        </Button>
        <Button
          style={{ color: seconds == 0 ? COLORS.white : COLORS.primary }}
          disabled={disabledButtom}
          primary={false}
          marginTop={20}
          onPress={reSendToken}
        >
          {seconds <= 0
            ? translate('verification-resend-code')
            : `${translate('verification-resend-code-in')} ${seconds}s`}
        </Button>
      </ButtonContainer>
      <Toast show={errors.length !== 0} type='error' message={messageError} />
    </Container>
  );
};

export default ValidationPhonePresentation;
