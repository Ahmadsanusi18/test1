import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { MotiView, useAnimationState } from 'moti';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';

import { useFonts, UncialAntiqua_400Regular } from '@expo-google-fonts/uncial-antiqua';
import * as SplashScreen from 'expo-splash-screen';

type RootStackParamList = {
  Index: undefined;
  Explore: undefined;
};

type IndexScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Index'>;

const IndexScreen = () => {
  const navigation = useNavigation<IndexScreenNavigationProp>();

  // --- semua hooks harus di atas ---
  const [fontsLoaded] = useFonts({ UncialAntiqua_400Regular });

  const animationState = useAnimationState({
    from: { opacity: 0, translateY: 50 },
    to: { opacity: 1, translateY: 0 },
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  // --- jangan return sebelum hooks di atas jalan ---
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <ActivityIndicator size="large" color="#E6E6FA" />
      </View>
    );
  }

  return (
    <LinearGradient
      colors={['#0D1164', '#000000']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {/* Logo */}
      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', duration: 1500 }}
      >
        <Image
          source={require('../../assets/images/shop.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </MotiView>

      {/* Judul dengan font */}
      <MotiView state={animationState} transition={{ type: 'spring', duration: 1500 }}>
        <Text style={[styles.title, { fontFamily: 'UncialAntiqua_400Regular' }]}>
        MAD STORE
        </Text>
      </MotiView>

      {/* Subjudul */}
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 2000, delay: 500 }}
        style={styles.subtitleContainer}
      >
        <Text style={styles.subtitle}>
          A visually stunning app with a dark, modern aesthetic.
        </Text>
      </MotiView>

      {/* Tombol */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Explore')}>
        <MotiView
          from={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 1000 }}
        >
          <Text style={styles.buttonText}>Belanja Sekarang Juga</Text>
        </MotiView>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#E6E6FA',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleContainer: { alignItems: 'center' },
  subtitle: {
    fontSize: 18,
    color: '#D8BFD8',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonText: { color: '#E6E6FA', fontSize: 16, fontWeight: 'bold' },
});

export default IndexScreen;
