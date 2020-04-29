import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Label from 'components/core/Label';
import Header from 'components/core/Header';
import Button from 'components/core//Button';
import Checkbox from 'components/core/Checkbox';
import COLORS from 'config/colors';
import { Container, CheckContainer, RiskContainer, Separator } from './styles';
import { getLanguage } from 'helpers';

const RiskPresentation = () => {
  const { navigate, goBack } = useNavigation();
  const { t: translate, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  return (
    <Container>
      <View>
        <Header customBackFunction={goBack} />
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          {translate('risk-assessment-title')}
        </Label>
        <Label fontSize={16} color={COLORS.defaultText} marginTop={20}>
          {translate('risk-assessment-subtitle')}
        </Label>
      </View>
      <RiskContainer>
        <FlatList
          data={Array.from({ length: 10 }).map((_, index) => ({
            label: 'Tive contato próximo com caso suspeito de COVID-19 nos últimos dias?',
            id: index
          }))}
          renderItem={({ item }) => (
            <CheckContainer>
              <Checkbox label={item.label} checkPosition='right' />
            </CheckContainer>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </RiskContainer>
      <Button
        onPress={() =>
          navigate('Success', {
            title: translate('register-completed'),
            subTitle: translate('profile-saved-successfully')
          })
        }
      >
        {translate('next')}
      </Button>
    </Container>
  );
};

export default RiskPresentation;
