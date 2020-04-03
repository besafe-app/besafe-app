import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import store from 'store';

import Navigator from 'config/routes';
import COLORS from 'config/colors';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={COLORS.background} barStyle='dark-content' />
      <SafeAreaView backgroundColor={COLORS.primary} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.Os == 'ios' ? 'padding' : 'height'}
      >
        <Navigator />
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default App;
