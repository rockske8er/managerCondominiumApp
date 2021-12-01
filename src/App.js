import React from 'react';


import { NavigationContainer } from '@react-navigation/native'

import { StateProvider } from './contexts/StateContext'
import { AuthStack } from './stacks/AuthStack';
export default function App() {
  return (
    <StateProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </StateProvider>
  );
}

