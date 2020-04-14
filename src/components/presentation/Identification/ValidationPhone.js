import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Toast from 'components/core/Toast';

import Label from 'components/core/Label';
import TextInput from 'components/core/TextInput';
import Button from 'components/core/Button';
import COLORS from 'config/colors';
import { LabelContainer, ButtonContainer, FormContainer, Container } from './styles';

const ValidationPhonePresentation = ({
  isLoading,
  errors,
  messageError,
  onSubmit,
  reSendToken
}) => {
  const { navigate } = useNavigation();
  const [seconds, setSeconds] = useState(0);
  const [disabledButtom, setDisabledButtom] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [messageError, setMessageError] = useState('');
  const { t: translate, i18n } = useTranslation();

  const startSeconds = () => {
    let restart = 60;
    const start = setInterval(() => {
      restart--;
      setSeconds(restart);
      if (restart == 0) {
        clearInterval(start);
        setDisabledButtom(false);
      }
    }, 1000);
  };

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  useEffect(() => {
    startSeconds();
  }, []);

  return (
    <Container>
      <FormContainer>
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          Verificação
        </Label>
        <LabelContainer>
          <Label fonSize={16} lineHeight={24}>
            Enviamos um código de verificação. Por favor insira ele abaixo.
          </Label>
        </LabelContainer>
        <TextInput
          onChangeText={value => console.tron.log({ value })}
          placeholder={'Código de Verificação'}
          marginTop={24}
        />
      </FormContainer>
      <ButtonContainer>
        <Button disabled={disabled} action={() => onSubmit()}>
          {'Verificar'}
        </Button>
        <Button disabled={disabledButtom} primary={false} marginTop={20} action={() => reSend()}>
          {seconds <= 0 ? `Reenviar código` : `Reenviar código em ${seconds}s`}
        </Button>
      </ButtonContainer>
      <Toast show={errors.length !== 0} type='error' message={messageError} />
    </Container>
  );
};

export default ValidationPhonePresentation;
