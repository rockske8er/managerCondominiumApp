import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Preload } from '../../screens/Preload';

const { Navigator, Screen, Group } = createNativeStackNavigator()

function AuthStack() {
  return (
    <Navigator>
      <Group screenOptions={{
        headerShown: false
      }}>
        <Screen name="Preload" component={Preload} />
      </Group>
    </Navigator>
  );
}



export { AuthStack };
