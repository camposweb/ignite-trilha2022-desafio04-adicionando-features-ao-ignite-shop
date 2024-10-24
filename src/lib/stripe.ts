import { env } from '@/env'
import Stripe from 'stripe'

export const stripe = new Stripe(
  `${env.NEXT_PUBLIC_VERCEL_STRIPE_SECRET_KEY}`,
  {
    apiVersion: '2024-06-20',
    appInfo: {
      name: 'Ignite Shop',
    },
  },
)
