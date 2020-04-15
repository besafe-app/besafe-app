import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Label from 'components/core/Label';
import Button from 'components/core/Button';

import COLORS from 'config/colors';
import { setStoreItem } from 'config/storage';

import { StyledContainer } from './styles';

const Onboarding = () => {
  const { replace } = useNavigation();
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  const onPressAgreed = () => {
    setStoreItem('@BeSafe:TermAgreed', 'true', () => replace('Identification'));
  };

  return (
    <StyledContainer>
      <Label
        fontWeight='bold'
        fontSize={40}
        lineHeight={50}
        color={COLORS.black}
        textAlign='center'
      >
        {t('onboarding-title')}
      </Label>
      <Label
        fontSize={21}
        lineHeight={25}
        color={COLORS.black}
        textAlign='center'
        marginTop={30}
        marginBottom={40}
      >
        {t('onboarding-text')}
      </Label>
      <Button onPress={onPressAgreed}>{t('onboarding-buttonAgree')}</Button>
    </StyledContainer>
  );
};

export default Onboarding;
