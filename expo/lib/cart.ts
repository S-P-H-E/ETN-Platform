import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'

export interface CartItem {
  id: string
  quantity: number
  name: string
  price?: number
}

const CART_KEY = 'cart'

// Hook to get and listen to cart items
export function useCartItems(): CartItem[] {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    loadCart()
    
    // Set up interval to check for changes (since we can't use reactive store)
    const interval = setInterval(loadCart, 500)
    return () => clearInterval(interval)
  }, [])

  const loadCart = async () => {
    try {
      const data = await AsyncStorage.getItem(CART_KEY)
      if (data) {
        const items = JSON.parse(data)
        setCartItems(Array.isArray(items) ? items : [])
      }
    } catch (error) {
      console.error('Error loading cart:', error)
    }
  }

  return cartItems
}

async function getCartItems(): Promise<CartItem[]> {
  try {
    const data = await AsyncStorage.getItem(CART_KEY)
    if (data) {
      const items = JSON.parse(data)
      return Array.isArray(items) ? items : []
    }
  } catch (error) {
    console.error('Error getting cart items:', error)
  }
  return []
}

async function saveCartItems(items: CartItem[]): Promise<void> {
  try {
    await AsyncStorage.setItem(CART_KEY, JSON.stringify(items))
  } catch (error) {
    console.error('Error saving cart:', error)
  }
}

export async function addItemToCart(item: CartItem): Promise<void> {
  const items = await getCartItems()
  const index = items.findIndex(i => i.id === item.id)

  if (index !== -1) {
    // Check if adding would exceed max quantity
    const nextQuantity = items[index].quantity + (item.quantity || 1)
    if (nextQuantity > 10) {
      // TODO: Show error toast
      return
    }
  } else {
    // Check if initial quantity exceeds max
    const initialQuantity = item.quantity || 1
    if (initialQuantity > 10) {
      // TODO: Show error toast
      return
    }
  }

  const updatedItems = [...items]
  if (index !== -1) {
    const nextQuantity = items[index].quantity + (item.quantity || 1)
    updatedItems[index] = {
      ...items[index],
      quantity: Math.min(10, Math.max(1, nextQuantity))
    }
  } else {
    const initialQuantity = Math.min(10, Math.max(1, item.quantity || 1))
    updatedItems.push({ ...item, quantity: initialQuantity })
  }

  await saveCartItems(updatedItems)
  // TODO: Show success toast
}

export async function removeItemFromCart(itemId: string): Promise<void> {
  const items = await getCartItems()
  await saveCartItems(items.filter(item => item.id !== itemId))
}

export async function updateItemQuantity(itemId: string, newQuantity: number): Promise<void> {
  const items = await getCartItems()
  const bounded = Math.min(10, Math.max(1, newQuantity))
  const updated = items.map(item =>
    item.id === itemId
      ? { ...item, quantity: bounded }
      : item
  )
  await saveCartItems(updated)
}

