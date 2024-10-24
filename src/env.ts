import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    APP_VERCEL_URL: z.string(),
  },
  clientPrefix: 'NEXT_',
  client: {
    NEXT_PUBLIC_VERCEL_URL: z.string().min(1),
    NEXT_PUBLIC_VERCEL_STRIPE_SECRET_KEY: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_VERCEL_STRIPE_SECRET_KEY:
      process.env.NEXT_PUBLIC_VERCEL_STRIPE_SECRET_KEY,
    APP_VERCEL_URL: process.env.APP_VERCEL_URL,
  },
})
