import React, { useLayoutEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { getStoreItem } from 'config/storage';

import { IdentificationScreen, ValidationPhoneScreen } from 'screens/Identification';
import { ProfileScreen } from 'screens/Profile';
import { PreConditionsScreen } from 'screens/PreConditions';
import { SymptomsScreen } from 'screens/Symptoms';
import { RiskScreen } from 'screens/Risk';
import { SuccessScreen } from 'screens/Success';
import { OnboardingScreen } from 'screens/Onboarding';
import { DashboardScreen } from 'screens/Dashboard';

const Stack = createStackNavigator();

const Navigator = () => {
  const [initialRoute, setInitialRoute] = useState('');

  useLayoutEffect(() => {
    getStoreItem('@BeSafe:TermAgreed', termAccepted => {
      setInitialRoute(termAccepted === 'true' ? 'Profile' : 'Onboarding');
    });
  }, []);

  if (!initialRoute) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName={initialRoute}>
        <Stack.Screen name='Onboarding' component={OnboardingScreen} />
        <Stack.Screen name='Identification' component={IdentificationScreen} />
        <Stack.Screen name='ValidationPhone' component={ValidationPhoneScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='PreConditions' component={PreConditionsScreen} />
        <Stack.Screen name='Symptoms' component={SymptomsScreen} />
        <Stack.Screen name='Success' component={SuccessScreen} />
        <Stack.Screen name='Risk' component={RiskScreen} />
        <Stack.Screen name='Dashboard' component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
