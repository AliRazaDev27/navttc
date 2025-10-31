import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../../../types'

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.product.id === action.payload.product.id)
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.product.id !== action.payload)
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.product.id === action.payload)
      if (item) {
        item.quantity++
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.product.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity--
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer
