import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Label from 'components/core/Label';
import Button from 'components/core/Button';

import COLORS from 'config/colors';
import { setStoreItem } from 'config/storage';

import headerOnboarding from 'assets/icons/HeaderOnboarding.png';

import { StyledContainer, HeaderImage } from './styles';

const Onboarding = () => {
  const { replace } = useNavigation();
  const { t } = useTranslation();

  const onPressAgreed = () => {
    setStoreItem('@BeSafe:TermAgreed', 'true', () => replace('Identification'));
  };

  return (
    <StyledContainer>
      <HeaderImage source={headerOnboarding} />
      <Label
        fontWeight='bold'
        fontSize={24}
        lineHeight={34}
        color={COLORS.black}
        textAlign='center'
      >
        {t('onboarding-title')}
      </Label>
      <Label
        fontSize={16}
        lineHeight={24}
        color={COLORS.black}
        textAlign='center'
        marginTop={30}
        marginBottom={40}
      >
        {t('onboarding-text')}
      </Label>
      <Button onPress={onPressAgreed} marginBottom={64}>
        {t('onboarding-buttonAgree')}
      </Button>
    </StyledContainer>
  );
};

export default Onboarding;
