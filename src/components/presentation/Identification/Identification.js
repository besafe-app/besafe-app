import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Label from 'components/core/Label';
import TextInput from 'components/core/TextInput';
import Button from 'components/core/Button';
import COLORS from 'config/colors';
import { LabelContainer, ButtonContainer, FormContainer, Container } from './styles';

const IdentificationPresentation = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <FormContainer>
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          Dados básicos
        </Label>
        <TextInput placeholder='Como quer ser chamado' marginTop={24} />
        <TextInput placeholder='Celular' marginTop={24} />
        <LabelContainer>
          <Label fonSize={16} lineHeight={24}>
            Enviaremos um código de verificação por Mensagem (SMS) no seu celular.
          </Label>
        </LabelContainer>
      </FormContainer>
      <ButtonContainer>
        <Button label='Receber código por SMS' action={() => navigate('ValidationPhone')} />
        <Button
          label='Receber por WhatsApp'
          primary={false}
          marginTop={20}
          action={() => navigate('Profile')}
        />
      </ButtonContainer>
    </Container>
  );
};

export default IdentificationPresentation;
