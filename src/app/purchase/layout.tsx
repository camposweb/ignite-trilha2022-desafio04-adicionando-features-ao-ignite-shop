import { ReactNode } from 'react'

interface PurchaseLayoutProps {
  children: ReactNode
}

export default function PurchaseLayout({ children }: PurchaseLayoutProps) {
  return <main className="mx-auto w-full max-w-[1440px]">{children}</main>
}
