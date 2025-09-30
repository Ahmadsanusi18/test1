import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './app/(tabs)/index';
import ExploreScreen from './app/(tabs)/explore';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}