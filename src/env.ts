import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_VERCEL_URL_APP: z.string().min(1),
    NEXT_PUBLIC_VERCEL_ENV_STRIPE_SECRET_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_VERCEL_URL_APP: process.env.NEXT_PUBLIC_VERCEL_URL_APP,
    NEXT_PUBLIC_VERCEL_ENV_STRIPE_SECRET_KEY:
      process.env.NEXT_PUBLIC_VERCEL_ENV_STRIPE_SECRET_KEY,
  },
})
