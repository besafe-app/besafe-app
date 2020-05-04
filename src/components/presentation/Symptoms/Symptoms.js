import React from 'react';
import { View, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Label from 'components/core/Label';
import Button from 'components/core/Button';
import Checkbox from 'components/core/Checkbox';
import COLORS from 'config/colors';
import { Container, SymptomsContainer, CheckContainer, Separator } from './styles';
import Toast from 'components/core/Toast';
import Loader from 'components/core/Loader';

const SymptomsPresentation = ({
  checkCondition,
  onSubmit,
  conditions,
  messageError,
  errors,
  loading
}) => {
  const { t: translate } = useTranslation();

  return (
    <>
      <Container>
        <View>
          <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
            {translate('pre-conditions-title')}
          </Label>
          <Label fontSize={16} color={COLORS.defaultText} marginTop={30}>
            {translate('pre-conditions-subtitle')}
          </Label>
        </View>
        <SymptomsContainer>
          <FlatList
            data={conditions}
            renderItem={({ item }) => (
              <CheckContainer key={item.id}>
                <Checkbox label={item.name} checkPosition='right' onChange={checkCondition} />
              </CheckContainer>
            )}
            ItemSeparatorComponent={() => <Separator />}
            keyExtractor={item => item.id}
          />
        </SymptomsContainer>
        <Button onPress={onSubmit} isLoading={loading}>
          {translate('next')}
        </Button>
      </Container>
      <Toast show={errors.length !== 0} type='error' message={messageError} />
    </>
  );
};

SymptomsPresentation.propTypes = {
  checkCondition: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  conditions: PropTypes.array,
  messageError: PropTypes.string,
  errors: PropTypes.array,
  loading: PropTypes.bool
};

SymptomsPresentation.defaultProps = {
  conditions: [],
  messageError: null,
  errors: [],
  loading: false
};

export default SymptomsPresentation;
