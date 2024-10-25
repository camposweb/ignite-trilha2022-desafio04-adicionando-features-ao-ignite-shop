import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    APP_VERCEL_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_VERCEL_URL: z.string().min(1),
    NEXT_PUBLIC_VERCEL_STRIPE_SECRET_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_VERCEL_STRIPE_SECRET_KEY:
      process.env.NEXT_PUBLIC_VERCEL_STRIPE_SECRET_KEY,
  },
})
