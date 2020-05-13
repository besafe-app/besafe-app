import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Label from 'components/core/Label';
import Button from 'components/core/Button';
import COLORS from 'config/colors';
import {
  Container,
  SymptomsContainer,
  SelectedContainer,
  CalendarContainer,
  Separator
} from './styles';
import Toast from 'components/core/Toast';
import Loader from 'components/core/Loader';

import { Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import icDash from 'assets/icons/icDash.png';

const SymptomsDetailsPresentation = ({
  setFieldValue,
  values,
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
            {translate('symptoms-details-title')}
          </Label>
        </View>
        <CalendarContainer />
        <SymptomsContainer>
          <FlatList
            data={symptoms}
            ListEmptyComponent={<ActivityIndicator size='large' />}
            renderItem={({ item }) => (
              <SelectedContainer key={item.id}>
                <TouchableOpacity onPress={() => {}}>
                  <Image source={icDash} />
                </TouchableOpacity>

                <TouchableWithoutFeedback onPress={() => {}}>
                  <Label>{item.name}</Label>
                </TouchableWithoutFeedback>
              </SelectedContainer>
            )}
            ItemSeparatorComponent={() => <Separator />}
            keyExtractor={item => item.id}
          />
        </SymptomsContainer>
        <Button
          onPress={onSubmit}
          isLoading={loading}
          backgroundColor={COLORS.white}
          borderColor={COLORS.primary}
          borderWidth={2}
          textColor={COLORS.primary}
          marginBottom={10}
        >
          {translate('symptoms-button-title')}
        </Button>
        <Button onPress={onSubmit} isLoading={loading}>
          {translate('confirm')}
        </Button>
      </Container>
      <Toast show={errors.length !== 0} type='error' message={messageError} />
    </>
  );
};

SymptomsDetailsPresentation.propTypes = {
  checkCondition: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  symptoms: PropTypes.array,
  messageError: PropTypes.string,
  errors: PropTypes.array,
  loading: PropTypes.bool
};

SymptomsDetailsPresentation.defaultProps = {
  symptoms: [],
  messageError: null,
  errors: [],
  loading: false
};

export default SymptomsDetailsPresentation;
