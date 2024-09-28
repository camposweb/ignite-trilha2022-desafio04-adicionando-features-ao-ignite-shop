import { ReactNode } from 'react'
import { Header } from '../components/Header'

interface ShopLayoutProps {
  children: ReactNode
}

export default function ShopLayout({ children }: ShopLayoutProps) {
  return (
    <div className="flex flex-col pb-32 lg:px-8 2xl:px-36">
      <Header />
      {children}
    </div>
  )
}
