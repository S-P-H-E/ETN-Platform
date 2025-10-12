import createLocalStore from 'react-local-storage-manager'
import { z } from "zod"

const CartItem = z.object({
  id: z.string(),
  quantity: z.number(),
  name: z.string(),
  price: z.number().optional()
})

type CartItem = z.infer<typeof CartItem>
const CartItems = z.array(CartItem)

const store = createLocalStore('cart', (data) => CartItems.parse(data),[/* Default Value */])

// Functions
const useCartItems = store.use
const addItemToCart = (item: CartItem) => {
  store.set(items => {
    const index = items.findIndex(i => i.id === item.id)

    if (index !== -1) {
      // Update quantity of existing item
      const updated = [...items]
      const nextQuantity = items[index].quantity + (item.quantity || 1)
      updated[index] = {
        ...items[index],
        quantity: Math.min(10, Math.max(1, nextQuantity))
      }
      return updated
    } else {
      // Add new item with default quantity
      const initialQuantity = Math.min(10, Math.max(1, item.quantity || 1))
      return [...items, { ...item, quantity: initialQuantity }]
    }
  })
}

const removeItemFromCart = (itemId: CartItem['id']) => {
  store.set(items => items.filter(item => item.id !== itemId))
}

const updateItemQuantity = (itemId: CartItem['id'], newQuantity: number) => {
  store.set(items => {
    const bounded = Math.min(10, Math.max(1, newQuantity))
    return items.map(item =>
      item.id === itemId
        ? { ...item, quantity: bounded }
        : item
    )
  })
}

export { useCartItems, addItemToCart, removeItemFromCart, updateItemQuantity}