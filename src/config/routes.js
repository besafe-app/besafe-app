import React, { useLayoutEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { getStoreItem } from 'config/storage';

import { IdentificationScreen } from 'screens/Identification';
import { ProfileScreen } from 'screens/Profile';
import { PreConditionsScreen } from 'screens/PreConditions';
import { RiskScreen } from 'screens/Risk';
import { SuccessScreen } from 'screens/Success';
import { OnboardingScreen } from 'screens/Onboarding';
import { HomeScreen } from 'screens/Home';

const Stack = createStackNavigator();

const Navigator = () => {
  const [initialRoute, setInitialRoute] = useState('');

  useLayoutEffect(() => {
    getStoreItem('@BeSafe:TermAgreed', termAcepted => {
      setInitialRoute(termAcepted === 'true' ? 'Profile' : 'Onboarding');
    });
  }, []);

  if (!initialRoute) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName={initialRoute}>
        <Stack.Screen name='Onboarding' component={OnboardingScreen} />
        <Stack.Screen name='Identification' component={IdentificationScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='PreConditions' component={PreConditionsScreen} />
        <Stack.Screen name='Success' component={SuccessScreen} />
        <Stack.Screen name='Risk' component={RiskScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
