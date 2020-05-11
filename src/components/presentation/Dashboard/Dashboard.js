import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguage } from 'helpers';

import Label from 'components/core/Label';
import Button from 'components/core/Button';
import Calendar from 'components/core/Calendar';

import { getStoreItem, setStoreItem } from 'config/storage';
import COLORS from 'config/colors';
import { TYPOGRAPHY } from 'config/typography';

import {
  LabelContainer,
  CalendarContainer,
  ButtonContainer,
  Content,
  Container,
  ImageContent,
  PersonEmpty
} from './styles';

import personEmpty from 'assets/icons/PersonEmpty.png';

// mock marked dates
const markedDates = {
  '2020-05-11': { marked: true, dotColor: COLORS.dotGrey },
  '2020-05-12': { marked: true, dotColor: COLORS.dotGreen },
  '2020-05-13': { marked: true, dotColor: COLORS.dotRed },
  '2020-05-15': { marked: true, dotColor: COLORS.dotRed },
  '2020-05-16': { marked: true, dotColor: COLORS.dotGrey }
};

const DashboardPresentation = () => {
  const { t: translate, i18n } = useTranslation();
  const [firstAccess, setFirstAccess] = useState('');

  useLayoutEffect(() => {
    getStoreItem('@BeSafe:FirstAccess', firstAccess => {
      if (!Boolean(firstAccess)) {
        setStoreItem('@BeSafe:FirstAccess', 'true');
      }
      setFirstAccess(Boolean(firstAccess));
    });
  }, []);

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  return (
    <Container>
      {firstAccess ? (
        <Content>
          <Label typography={TYPOGRAPHY.bold} fontSize={32} lineHeight={40} color={COLORS.black}>
            {translate('dashboard-my-symptoms')}
          </Label>
          <Calendar markedDates={markedDates} />
          <LabelContainer>
            <Label fontSize={18} lineHeight={24} color={COLORS.grey} textAlign='center'>
              {translate('dashboard-had-no-symptoms-today')}
            </Label>
          </LabelContainer>
          <ImageContent>
            <PersonEmpty source={personEmpty} />
          </ImageContent>

          <Button>{translate('add-symptoms')}</Button>
          <Button
            marginTop={16}
            borderColor={COLORS.red}
            borderWidth={2}
            textColor={COLORS.red}
            backgroundColor={COLORS.white}
          >
            {translate('i-am-fine')}
          </Button>
        </Content>
      ) : (
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
      )}
    </Container>
  );
};

export default DashboardPresentation;
