import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/images/shop.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Judul */}
      <Text style={styles.title}>About Mad Store</Text>

      {/* Deskripsi */}
      <Text style={styles.description}>
        Mad Store adalah aplikasi belanja modern dengan tampilan dark mode yang elegan.
        Kami menghadirkan pengalaman berbelanja yang cepat, mudah, dan nyaman
        langsung dari genggaman Anda.
      </Text>

      {/* Informasi Developer */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dikembangkan oleh:</Text>
        <Text style={styles.sectionContent}>Mad Developer Team</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kontak:</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:support@madstore.com')}>
          <Text style={[styles.sectionContent, styles.link]}>support@madstore.com</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Versi Aplikasi:</Text>
        <Text style={styles.sectionContent}>1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#000', // bisa kamu ganti sesuai tema
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#E6E6FA',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#D8BFD8',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E6E6FA',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    color: '#D8BFD8',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#87CEFA',
  },
});

export default AboutScreen;
