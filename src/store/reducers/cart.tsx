import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DishType } from 'services/api'

type CartState = {
  items: DishType[]
  detailsOpen: boolean
  cartOpen: boolean
}

const initialState: CartState = {
  items: [],
  detailsOpen: false,
  cartOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<DishType>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex !== -1) {
        alert('Item ja adicionado ao carrinho')
        return
      }
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openDetails: (state) => {
      state.detailsOpen = true
    },
    closeDetails: (state) => {
      state.detailsOpen = false
    },
    openCart: (state) => {
      state.cartOpen = true
    },
    closeCart: (state) => {
      state.cartOpen = false
    }
  }
})

export const { add, remove, openDetails, closeDetails, openCart, closeCart } =
  cartSlice.actions
export default cartSlice.reducer
