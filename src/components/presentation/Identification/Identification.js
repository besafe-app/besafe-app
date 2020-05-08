import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getLanguage } from 'helpers';
import { TextInputMask } from 'react-native-masked-text';

import Toast from 'components/core/Toast';
import TextInput from 'components/core/TextInput';
import Label from 'components/core/Label';
import Button from 'components/core/Button';

import COLORS from 'config/colors';
import { LabelContainer, ButtonContainer, FormContainer, Container } from './styles';

const IdentificationPresentation = ({ onSubmit, errors, messageError, values, setFieldValue }) => {
  const { t: translate, i18n } = useTranslation();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  useEffect(() => {
    if (values.nickname.length !== 0 && values.phoneNumber.length !== 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [values]);

  const validation = value => {
    if (value.length <= 15 || value.length <= 14) setFieldValue('phoneNumber', value);
  };

  return (
    <Container>
      <FormContainer>
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          {translate('identification-title')}
        </Label>
        <TextInput
          placeholder={translate('identification-nickname')}
          marginTop={24}
          value={values.nickname}
          onChange={value => setFieldValue('nickname', value)}
        />
        <TextInputMask
          placeholder={t('identification-phone-number')}
          style={styles.maskInput}
          type={'cel-phone'}
          options={{
            maskType: `${translate('identification-maskType')}`,
            dddMask: `${translate('identification-dddMask')}`,
            withDDD: true
          }}
          value={values.phoneNumber}
          onChangeText={value => validation(value)}
        />
        <LabelContainer>
          <Label fontSize={16} lineHeight={24}>
            {translate('identification-text')}
          </Label>
        </LabelContainer>
      </FormContainer>
      <ButtonContainer>
        <Button disabled={disabled} marginTop={20} onPress={onSubmit}>
          {translate('identification-title-receive-sms')}
        </Button>
      </ButtonContainer>
      <Toast show={errors.length !== 0} type='error' message={messageError} />
    </Container>
  );
};

export default IdentificationPresentation;

const styles = StyleSheet.create({
  maskInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.grey,
    backgroundColor: 'transparent',
    borderRadius: 8,
    marginTop: 10,
    paddingTop: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    fontSize: 18
  }
});
