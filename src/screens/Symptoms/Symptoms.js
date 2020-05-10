import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { SymptomsContainer } from 'containers/Symptoms';
import Header from 'components/core/Header';
import { Container } from './styles';

const SymptomsScreen = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <SymptomsContainer />
    </Container>
  );
};

export default SymptomsScreen;
