import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Label from 'components/core/Label';
import Button from 'components/core/Button';
import Checkbox from 'components/core/Checkbox';
import COLORS from 'config/colors';
import { Container, ConditionsContainer, CheckContainer, Separator } from './styles';

const PreConditionsPresentation = ({ checkCondition, onSubmit }) => {
  const { navigate } = useNavigation();
  const { t: translate } = useTranslation();

  return (
    <Container>
      <View>
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          {translate('pre-conditions-title')}
        </Label>
        <Label fontSize={16} color={COLORS.defaultText} marginTop={30}>
          {translate('pre-conditions-subtitle')}
        </Label>
      </View>
      <ConditionsContainer>
        <FlatList
          data={Array.from({ length: 10 }).map((_, index) => ({
            condition: 'Asma',
            id: index
          }))}
          renderItem={({ item }) => (
            <CheckContainer>
              <Checkbox label={item.condition} checkPosition='right' onChange={checkCondition} />
            </CheckContainer>
          )}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={item => item.id.toString()}
        />
      </ConditionsContainer>
      <Button onPress={onSubmit}>{translate('next')}</Button>
    </Container>
  );
};

PreConditionsPresentation.propTypes = {
  checkCondition: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PreConditionsPresentation;
