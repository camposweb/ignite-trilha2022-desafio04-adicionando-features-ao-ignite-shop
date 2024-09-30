import { stripe } from '@/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { z } from 'zod'

interface DataParams {
  params: {
    id: string
  }
}

export async function GET(req: NextRequest, { params }: DataParams) {
  const id = z.string().parse(params.id)

  const product = stripe.products.retrieve(id, {
    expand: ['default_price'],
  })

  const price = (await product).default_price as Stripe.Price

  return NextResponse.json({
    id: (await product).id,
    name: (await product).name,
    imageUrl: (await product).images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(price.unit_amount) / 100),
    description: (await product).description,
    defaultPriceId: price.id,
  })
}
