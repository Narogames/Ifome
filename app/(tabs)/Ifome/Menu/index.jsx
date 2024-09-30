import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CartContext } from '../src/context/CartContext'; 
import { Link } from 'expo-router';

const products = [
  { id: 1, name: 'Vegetais', price: 10.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwEX0XmlB0k8m9Ci1B4VdKGbnauUJdeB08Q&s' },
  { id: 2, name: 'Sorvete', price: 15.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_R8BBvNhOusVGoYZdiKYjj5ByowlXfmzYw&s' },
  { id: 3, name: 'Computador', price: 20.0, image: 'https://m.media-amazon.com/images/I/51LnfULhGYL._AC_UF894,1000_QL80_.jpg' },
];

export default function MenuScreen() {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>R${item.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Link href="../Carrinho/">
        <Text style={styles.link}>Ir para o Carrinho</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',
  },
  productContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#dc3545',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#dc3545',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    marginTop: 30,
    color: '#dc3545',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 18,
  },
});
