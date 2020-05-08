import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getLanguage } from 'helpers';

import Label from 'components/core/Label';
import Button from 'components/core/Button';

import COLORS from 'config/colors';
import TYPOGRAPHY from 'config/typography';

import { LabelContainer, ButtonContainer, Content, Container } from './styles';

const DashboardPresentation = () => {
  const { t: translate, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  return (
    <Container>
      <Content>
        <Label typography={TYPOGRAPHY.bold} fontSize={32} lineHeight={40} color={COLORS.black}>
          Olá, José
        </Label>
        <LabelContainer>
          <Label fontSize={18} lineHeight={28} marginTop={30} textAlign='center'>
            {translate('dashboard-question-feeling-today')}
          </Label>
        </LabelContainer>

        <ButtonContainer>
          <Button backgroundColor={COLORS.green} width={100} marginRight={8}>
            {translate('good')}
          </Button>
          <Button backgroundColor={COLORS.red} width={100} marginLeft={8}>
            {translate('bad')}
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default DashboardPresentation;
