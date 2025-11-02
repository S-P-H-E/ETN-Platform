import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useCartItems, removeItemFromCart, updateItemQuantity } from '../lib/cart'
import { router } from 'expo-router'

export default function Cart() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const cartItems = useCartItems()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleQuantityChange = async (itemId: string, currentQuantity: number, change: number) => {
    const newQuantity = Math.min(10, Math.max(1, currentQuantity + change))
    await updateItemQuantity(itemId, newQuantity)
  }

  const handleRemoveItem = async (itemId: string) => {
    await removeItemFromCart(itemId)
  }

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.cartButton}>
        <Ionicons name="cart-outline" size={24} color="#fff" />
        {mounted && cartItems.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{totalItems}</Text>
          </View>
        )}
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Shopping Cart</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Ionicons name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            {cartItems.length > 0 ? (
              <ScrollView style={styles.cartList}>
                {cartItems.map((item, i) => (
                  <View
                    key={item.id}
                    style={[
                      styles.cartItem,
                      i !== cartItems.length - 1 && styles.cartItemBorder,
                    ]}
                  >
                    <View style={styles.cartItemInfo}>
                      <Text style={styles.cartItemName}>{item.name}</Text>
                      <Text style={styles.cartItemLabel}>Course</Text>
                    </View>

                    <View style={styles.cartItemControls}>
                      <View style={styles.quantityControls}>
                        <TouchableOpacity
                          onPress={() => handleQuantityChange(item.id, item.quantity, -1)}
                          disabled={item.quantity <= 1}
                          style={[styles.quantityButton, item.quantity <= 1 && styles.disabledButton]}
                        >
                          <Ionicons name="remove" size={12} color="#fff" />
                        </TouchableOpacity>

                        <Text style={styles.quantityText}>{item.quantity}</Text>

                        <TouchableOpacity
                          onPress={() => handleQuantityChange(item.id, item.quantity, 1)}
                          disabled={item.quantity >= 10}
                          style={[styles.quantityButton, item.quantity >= 10 && styles.disabledButton]}
                        >
                          <Ionicons name="add" size={12} color="#fff" />
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity
                        onPress={() => handleRemoveItem(item.id)}
                        style={styles.deleteButton}
                      >
                        <Ionicons name="trash-outline" size={16} color="#fff" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}

                <View style={styles.cartSummary}>
                  <Text style={styles.cartSummaryText}>
                    Total Items: {totalItems}
                  </Text>
                  <TouchableOpacity
                    style={styles.checkoutButton}
                    onPress={() => {
                      setVisible(false)
                      router.push(`/checkout?items=${cartItems.map(item => item.id).join(',')}` as any)
                    }}
                  >
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            ) : (
              <View style={styles.emptyCart}>
                <Ionicons name="cart-outline" size={48} color="#fff" />
                <Text style={styles.emptyCartText}>Your cart is empty</Text>
                <Text style={styles.emptyCartSubtext}>Add some courses to get started</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    maxHeight: '80%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  cartList: {
    maxHeight: 400,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  cartItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.35)',
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 4,
  },
  cartItemLabel: {
    fontSize: 12,
    color: '#a5a5a5',
  },
  cartItemControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  quantityButton: {
    padding: 4,
  },
  disabledButton: {
    opacity: 0.5,
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    minWidth: 24,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  deleteButton: {
    padding: 4,
    marginLeft: 8,
  },
  cartSummary: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.35)',
  },
  cartSummaryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  checkoutButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  emptyCart: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyCartSubtext: {
    fontSize: 14,
    color: '#a5a5a5',
  },
})

