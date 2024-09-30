import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IFOME</Text>
      <Link href="./Menu/" style={styles.link}>
        Menu
      </Link>
      <Link href="./Carrinho/" style={styles.link}>
        Carrinho
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight:'bold',
  },
  link: {
    fontSize: 18,
    color: 'red',
    marginVertical: 10,
  },
});
