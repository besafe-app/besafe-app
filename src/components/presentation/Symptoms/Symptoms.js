import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
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
  setFieldValue,
  values,
  checkSymptom,
  onSubmit,
  symptoms,
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
            {translate('symptoms-title')}
          </Label>
        </View>
        <SymptomsContainer>
          <FlatList
            data={symptoms}
            ListEmptyComponent={<ActivityIndicator size='large' />}
            renderItem={({ item }) => (
              <CheckContainer key={item.id}>
                <Checkbox
                  label={item.name}
                  checkPosition='right'
                  complement={item.complement}
                  setFieldValue={setFieldValue}
                  values={values}
                />
              </CheckContainer>
            )}
            ItemSeparatorComponent={() => <Separator />}
            keyExtractor={item => item.id}
          />
        </SymptomsContainer>
        <Button onPress={onSubmit} isLoading={loading}>
          {translate('symptoms-button-title')}
        </Button>
      </Container>
      <Toast show={errors.length !== 0} type='error' message={messageError} />
    </>
  );
};

SymptomsPresentation.propTypes = {
  checkCondition: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  symptoms: PropTypes.array,
  messageError: PropTypes.string,
  errors: PropTypes.array,
  loading: PropTypes.bool
};

SymptomsPresentation.defaultProps = {
  symptoms: [],
  messageError: null,
  errors: [],
  loading: false
};

export default SymptomsPresentation;
