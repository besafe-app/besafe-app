import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { SymptomsContainer } from 'containers/SymptomsContainer';
import Header from 'components/core/Header';
import { Container } from './styles';

const Symptoms = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <Header customBackFunction={goBack} />
      <SymptomsContainer />
    </Container>
  );
};

export default Symptoms;
