'use client'

import { AppStore, cartStore } from '@/lib/redux/store'
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'

interface StoreProviderProps {
  children: ReactNode
}

export default function StoreProvider({ children }: StoreProviderProps) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = cartStore()
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}
