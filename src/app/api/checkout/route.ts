import { env } from '@/env'
import { stripe } from '@/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const response = await req.json()
  const priceId = response.priceId as string

  const successUrl = `${env.NEXT_PUBLIC_URL}/purchase?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${env.NEXT_PUBLIC_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
  })

  return NextResponse.json(
    {
      checkoutUrl: checkoutSession.url,
    },
    {
      status: 201,
    },
  )
}
