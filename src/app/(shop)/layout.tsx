import { ReactNode } from 'react'
import { Header } from '../components/Header'

interface ShopLayoutProps {
  children: ReactNode
}

export default function ShopLayout({ children }: ShopLayoutProps) {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  )
}
