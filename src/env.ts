import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    APP_URL: z.string().url(),
  },
  clientPrefix: 'NEXT_',
  client: {
    NEXT_PUBLIC_URL: z.string().min(1),
    NEXT_PUBLIC_STRIPE_SECRET_KEY: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_STRIPE_SECRET_KEY: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
    APP_URL: process.env.APP_URL,
  },
})
