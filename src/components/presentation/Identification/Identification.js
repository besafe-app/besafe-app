import React, { useState } from 'react';
import { maskJs } from 'mask-js';

import Label from 'components/core/Label';
import TextInput from 'components/core/TextInput';
import Button from 'components/core/Button';
import COLORS from 'config/colors';
import { LabelContainer, ButtonContainer, FormContainer, Container } from './styles';

const IdentificationPresentation = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <Container>
      <FormContainer>
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          Dados básicos
        </Label>
        <TextInput
          placeholder='Como quer ser chamado'
          marginTop={24}
          value={name}
          onChange={setName}
        />
        <TextInput
          placeholder='Celular'
          marginTop={24}
          value={maskJs('(99) 99999-9999?', phone)}
          onChange={setPhone}
        />
        <LabelContainer>
          <Label fonSize={16} lineHeight={24}>
            Enviaremos um código de verificação por Mensagem (SMS) no seu celular.aaaa
          </Label>
        </LabelContainer>
      </FormContainer>
      <ButtonContainer>
        <Button onPress={() => onSubmit({ name, phone })}>Receber código por SMS</Button>
        {/* <Button label='Receber por WhatsApp' marginTop={20} action={() => navigate('Profile')} /> */}
      </ButtonContainer>
    </Container>
  );
};

export default IdentificationPresentation;
