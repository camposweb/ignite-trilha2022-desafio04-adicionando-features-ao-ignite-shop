import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    template: '%s | IgniteShop 2.0',
    default: 'IgniteShop 2.0',
  },
  description: 'IgniteShop 2.0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} bg-background antialiased`}>
        {children}
      </body>
    </html>
  )
}
