import { configureStore, createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cartWidget',
  initialState: { value: 0 },
  reducers: {},
})

export const cartStore = () => {
  return configureStore({
    reducer: {
      cartWidget: cartSlice.reducer,
    },
  })
}
export type AppStore = ReturnType<typeof cartStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
