import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';

const AkunScreen = () => {
  const handleLogout = () => {
    Alert.alert('Logout', 'Apakah Anda yakin ingin keluar?', [
      { text: 'Batal', style: 'cancel' },
      { text: 'Keluar', onPress: () => console.log('User logged out') },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto Profil */}
      <Image
        source={require('../../assets/images/profil.jpg')} // ganti dengan avatar default kamu
        style={styles.avatar}
      />

      {/* Nama & Email */}
      <Text style={styles.name}>Mad User</Text>
      <Text style={styles.email}>maduser@example.com</Text>

      {/* Menu Akun */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Edit Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Pengaturan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Notifikasi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, styles.logout]} onPress={handleLogout}>
          <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#000', // sesuaikan tema
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#E6E6FA',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E6E6FA',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#D8BFD8',
    marginBottom: 20,
  },
  menuContainer: {
    width: '100%',
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#E6E6FA',
  },
  logout: {
    backgroundColor: 'rgba(255,0,0,0.1)',
  },
  logoutText: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
});

export default AkunScreen;
