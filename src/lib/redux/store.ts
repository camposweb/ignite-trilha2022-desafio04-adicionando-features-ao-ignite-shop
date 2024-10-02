import { Product } from '@/types/product'
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  cartItems: Product[]
  quantityItems: number
  totalPrice: number
}

interface AddItemCart {
  product: Product
}

interface RemoveItemCart {
  productId: string
}

const initialState: CartItem = {
  cartItems: [],
  quantityItems: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cartWidget',
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<AddItemCart>) => {
      const itemCart = state.cartItems?.find(
        (item) => item.id === action.payload.product.id,
      )

      if (!itemCart) {
        state.cartItems?.push(action.payload.product)
        state.quantityItems += 1
        state.totalPrice += action.payload.product.price
      }
    },
    removeItemCart: (state, action: PayloadAction<RemoveItemCart>) => {
      const newCartItems = state.cartItems?.filter(
        (item) => item.id !== action.payload.productId,
      )
      const newQuantityItems = state.quantityItems - 1

      const newTotalPrice = newCartItems?.reduce(
        (acc, item) => acc + item.price,
        0,
      )

      state.cartItems = newCartItems
      state.quantityItems = newQuantityItems
      state.totalPrice = newTotalPrice || 0
    },
  },
})

export const cartStore = () => {
  return configureStore({
    reducer: {
      cartWidget: cartSlice.reducer,
    },
  })
}

export const { addItemCart, removeItemCart } = cartSlice.actions

export type AppStore = ReturnType<typeof cartStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
