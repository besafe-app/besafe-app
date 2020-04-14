import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Label from 'components/core/Label';
import TextInput from 'components/core/TextInput';
import Button from 'components/core/Button';
import COLORS from 'config/colors';
import { LabelContainer, ButtonContainer, FormContainer, Container } from './styles';

const ValidationPhonePresentation = () => {
  const { navigate } = useNavigation();
  const [seconds, setSeconds] = useState(0);
  const [disabledButtom, setDisabledButtom] = useState(true);
  const [disabled, setDisabled] = useState(false);

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

  const reSend = () => {};

  useEffect(() => {
    startSeconds();
  }, []);

  const verification = () => {};

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
        <Button disabled={disabled} action={() => verification()}>
          {'Verificar'}
        </Button>
        <Button disabled={disabledButtom} primary={false} marginTop={20} action={() => reSend()}>
          {seconds <= 0 ? `Reenviar código` : `Reenviar código em ${seconds}s`}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default ValidationPhonePresentation;
