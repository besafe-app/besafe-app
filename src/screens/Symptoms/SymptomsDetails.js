import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { SymptomsDetailsContainer } from 'containers/Symptoms';
import { Container } from './styles';

const SymptomsDetailsScreen = () => {
  // const { goBack } = useNavigation();
  return (
    <Container>
      <SymptomsDetailsContainer />
    </Container>
  );
};

export default SymptomsDetailsScreen;
