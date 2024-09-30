import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ItemPurchase } from '../components/ItemPurchase'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getSession({ query }: any) {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}

export const metadata: Metadata = {
  title: 'Purchase',
}

interface PurchaseProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default async function Purchase({
  customerName,
  product,
}: PurchaseProps) {
  await getSession(
    'cs_test_a161KYiEcNj0y2gRz4grDOn7FPWVZtlKEtEJ69z8Oo1kCXNzARFBvbpfIY',
  )
  return (
    <div className="flex w-full flex-col items-center justify-center px-3 text-center">
      <Image
        src={'/logo.svg'}
        alt="img"
        width={129.74}
        height={52}
        className="mt-16"
      />
      <section className="mt-28 flex flex-row [&>div+div]:-ml-12">
        <ItemPurchase>
          <Image src={product.imageUrl} width={130} height={133} alt="" />
        </ItemPurchase>
      </section>
      <h1 className="mt-12 font-roboto text-3xl font-bold text-title">
        Compra efetuada!
      </h1>
      <p className="mt-6 font-roboto text-xl font-normal text-title">
        Uhuul {customerName}, sua compra de 1 camiseta já está a caminho da sua
        casa.
      </p>
      <Link
        href={'/'}
        className="mt-16 font-roboto text-xl font-bold text-principal"
      >
        Voltar ao catálogo
      </Link>
    </div>
  )
}
