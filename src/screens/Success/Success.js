import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { Container, SuccessIcon } from 'screens/Success/styles';
import Header from 'components/core/Header';
import Label from 'components/core/Label';
import COLORS from 'config/colors';
import Button from 'components/core/Button';

import success from 'assets/icons/Success.png';

const Success = ({
  route: {
    params: { title, subTitle }
  }
}) => {
  const { goBack, reset } = useNavigation();
  const { t: translate } = useTranslation();

  const onPressButton = () => reset({ index: 0, routes: [{ name: 'Onboarding' }] });

  return (
    <Container>
      <View>
        <Header customBackFunction={goBack} />
        <SuccessIcon source={success} />
        <View>
          <Label
            textAlign='center'
            fontSize={32}
            fontWeight='bold'
            color={COLORS.black}
            marginTop={16}
            lineHeight={40}
          >
            {title}
          </Label>
          <Label textAlign='center' fontSize={16} marginTop={16}>
            {subTitle}
          </Label>
        </View>
      </View>
      <Button onPress={onPressButton}>{translate('lets-go')}</Button>
    </Container>
  );
};

Success.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string
    })
  })
};

export default Success;
