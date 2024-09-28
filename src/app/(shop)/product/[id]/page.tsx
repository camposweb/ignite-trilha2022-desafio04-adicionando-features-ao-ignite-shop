import { env } from '@/env'
import { Product } from '@/types/product'
import { Metadata } from 'next'
import Image from 'next/image'

interface ProductProps {
  params: {
    id: string
  }
}

async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`${env.NEXT_PUBLIC_URL}/api/products/${id}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const product = await response.json()

  return product
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.id)

  return {
    title: product.name,
  }
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.id)

  return (
    <div className="w-full lg:flex lg:justify-between lg:gap-16 lg:px-11">
      <div className="flex h-[656px] items-center justify-center bg-gradient-to-t from-begin to-end lg:min-w-[576px]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={401}
          height={401}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-roboto text-3xl font-bold text-text">
          {product.name}
        </h1>
        <span className="pt-4 font-roboto text-3xl text-light">
          {product.price}
        </span>
        <p className="pt-10 font-roboto text-lg font-normal text-text">
          {product.description}
        </p>
        <button className="mt-auto items-center rounded-lg bg-principal p-5 font-roboto text-xl font-bold text-white hover:bg-light">
          Colocar na sacola
        </button>
      </div>
    </div>
  )
}
