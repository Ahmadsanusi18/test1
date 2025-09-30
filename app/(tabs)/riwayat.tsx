import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Contoh data dummy riwayat
const riwayatData = [
  { id: '1', title: 'Pembelian Produk A', date: '2025-09-20', total: 'Rp 120.000' },
  { id: '2', title: 'Pembelian Produk B', date: '2025-09-25', total: 'Rp 85.000' },
  { id: '3', title: 'Pembelian Produk C', date: '2025-09-28', total: 'Rp 45.000' },
];

const RiwayatScreen = () => {
  const renderItem = ({ item }: { item: typeof riwayatData[0] }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.total}>{item.total}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Riwayat Transaksi</Text>
      <FlatList
        data={riwayatData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // tema gelap
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E6E6FA',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    color: '#E6E6FA',
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    color: '#B0B0B0',
    marginTop: 5,
  },
  total: {
    fontSize: 16,
    color: '#ADFF2F',
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default RiwayatScreen;
