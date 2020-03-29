import React from 'react';
import { Container, SuccessIcon } from 'screens/Profile/styles';
import Header from 'components/core/Header';
import Label from 'components/core/Label';
import COLORS from 'config/colors';
import { View } from 'react-native';
import Button from 'components/core/Button';

const Success = () => (
  <Container>
    <View>
      <Header />
      <SuccessIcon />
      <View>
        <Label
          textAlign='center'
          fontSize={32}
          fontWeight='bold'
          color={COLORS.black}
          marginTop='16px'
        >
          Cadastro{'\n'}concluído!
        </Label>
        <Label textAlign='center' fontSize={16} marginTop='16px'>
          Agora é hora de registrar como você se sente. Por favor, seja atencioso e fique tranquilo:
          vamos lidar com isso juntos!
        </Label>
      </View>
    </View>
    <Button label='Vamos lá!' />
  </Container>
);

export default Success;
