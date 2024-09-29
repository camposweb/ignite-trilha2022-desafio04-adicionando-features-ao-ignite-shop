import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ItemPurchase } from '../components/ItemPurchase'

export const metadata: Metadata = {
  title: 'Purchase',
}

export default async function Purchase() {
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
          <Image src={'/shirt01.png'} width={130} height={133} alt="" />
        </ItemPurchase>
        <ItemPurchase>
          <Image src={'/shirt01.png'} width={130} height={133} alt="" />
        </ItemPurchase>
        <ItemPurchase>
          <Image src={'/shirt01.png'} width={130} height={133} alt="" />
        </ItemPurchase>
        <ItemPurchase>
          <Image src={'/shirt01.png'} width={130} height={133} alt="" />
        </ItemPurchase>
      </section>
      <h1 className="mt-12 font-roboto text-3xl font-bold text-title">
        Compra efetuada!
      </h1>
      <p className="mt-6 font-roboto text-xl font-normal text-title">
        Uhuul Diego Fernandes, sua compra de 3 camisetas já está a caminho da
        sua casa.
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
