import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';

import { HapticTab } from '@/components/haptic-tab';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#0D1164',   // warna icon aktif
        tabBarInactiveTintColor: '#999999', // warna icon non-aktif
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <BlurView tint="default" intensity={50} style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        ),
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          position: 'absolute',
          backgroundColor: 'transparent',
        },

        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'riwayat') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'shop') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'about') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'akun') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="riwayat" options={{ title: 'Riwayat' }} />
      <Tabs.Screen name="shop" options={{ title: 'Shop' }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
      <Tabs.Screen name="akun" options={{ title: 'Akun' }} />
    </Tabs>
  );
}
