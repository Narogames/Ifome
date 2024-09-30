// app/(tabs)/Carrinho/index.jsx
import React, { useContext, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import { CartContext } from '../src/context/CartContext';

export default function CartScreen() {
  const { cartItems, totalValue } = useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCheckout = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name} - {item.quantity}x</Text>
              <Text style={styles.itemPrice}>R${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyCartText}>Carrinho vazio</Text>}
      />
      <Text style={styles.total}>Total: R${totalValue.toFixed(2)}</Text>
      {cartItems.length > 0 && (
        <TouchableOpacity style={styles.button} onPress={handleCheckout}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      )}

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Compra realizada!</Text>
            <Button title="OK" onPress={() => setModalVisible(false)} color="#dc3545" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e9ecef',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#343a40',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dc3545',
  },
  emptyCartText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#6c757d',
    marginTop: 20,
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'right',
    color: '#495057',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#dc3545', 
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
