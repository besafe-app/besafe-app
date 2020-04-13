import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { IdentificationPresentation } from 'components/presentation/Identification';

import { Creators } from 'store/ducks/user';
const { checkUserExists } = Creators;

const IdentificationContainer = () => {
  const dispatch = useDispatch();

  const { navigate } = useNavigation();

  const submitForm = ({ name, phone }) => {
    dispatch(checkUserExists(name.replace(/ /g, '%20'), phone, () => navigate('Profile')));
  };
  return <IdentificationPresentation onSubmit={submitForm} />;
};

export default IdentificationContainer;
