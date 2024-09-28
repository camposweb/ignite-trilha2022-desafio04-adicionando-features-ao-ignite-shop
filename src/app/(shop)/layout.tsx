import { ReactNode } from 'react'
import { Header } from '../components/Header'

interface ShopLayoutProps {
  children: ReactNode
}

export default function ShopLayout({ children }: ShopLayoutProps) {
  return (
    <div className="mx-auto mb-32 w-full max-w-[1440px]">
      <Header />
      {children}
    </div>
  )
}
